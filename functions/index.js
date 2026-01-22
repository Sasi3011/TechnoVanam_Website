/**
 * Firebase Cloud Functions for Techno Vanam
 * Includes: Schema validation, Error handling, Automated backups
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");

admin.initializeApp();
setGlobalOptions({
    maxInstances: 10,
    region: "asia-south1",
});

// Email transporter configuration
// Note: Use environment variables or Secrets Manager for these values
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Or your own SMTP host
    port: 465,
    secure: true,
    auth: {
        user: "official@technovanam.in", // Your email
        pass: "pxqf ppsa whwb lskm", // Use App Password for Gmail
    },
});

// ============================================
// ALERTING & MONITORING HELPERS
// ============================================

/**
 * Send critical alerts to Slack/Discord/Email
 * @param {string} title - Alert title
 * @param {Object} details - Alert details
 */
async function notifyAdmin(title, details) {
    const webhookUrl = process.env.MONITORING_WEBHOOK_URL;
    if (!webhookUrl) return;

    try {
        await fetch(webhookUrl, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                text: `🚨 *CRITICAL ALERT: ${title}*`,
                attachments: [{
                    color: "#ff0000",
                    fields: Object.entries(details).map(([k, v]) => ({
                        title: k,
                        value: typeof v === "object" ? JSON.stringify(v) : v,
                        short: true
                    }))
                }]
            })
        });
    } catch (err) {
        logger.error("Failed to send admin notification", err);
    }
}


// Schema definitions
const schemas = {
    job: {
        title: { type: "string", required: true, maxLength: 200 },
        type: {
            type: "string",
            required: true,
            enum: ["Full-time", "Part-time", "Contract", "Intern"],
        },
        location: { type: "string", required: true, maxLength: 100 },
        category: {
            type: "string",
            required: true,
            enum: ["Design", "Development", "Marketing", "Intern"],
        },
        description: { type: "string", required: true, maxLength: 5000 },
        perks: { type: "array", required: false },
        createdAt: { type: "timestamp", required: true },
        updatedAt: { type: "timestamp", required: false },
    },
    application: {
        jobId: { type: "string", required: true },
        jobTitle: { type: "string", required: true },
        name: { type: "string", required: true, maxLength: 100 },
        email: {
            type: "string",
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        phone: { type: "string", required: true, maxLength: 20 },
        portfolio: { type: "string", required: false, maxLength: 500 },
        resume: { type: "string", required: true, maxLength: 500 },
        coverLetter: { type: "string", required: false, maxLength: 2000 },
        createdAt: { type: "timestamp", required: true },
        status: {
            type: "string",
            required: false,
            enum: ["pending", "reviewed", "shortlisted", "rejected"],
        },
    },
    inquiry: {
        name: { type: "string", required: true, maxLength: 100 },
        email: {
            type: "string",
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        },
        company: { type: "string", required: false, maxLength: 200 },
        website: { type: "string", required: false, maxLength: 500 },
        services: { type: "array", required: true },
        message: { type: "string", required: true, maxLength: 2000 },
        createdAt: { type: "timestamp", required: true },
        status: {
            type: "string",
            required: false,
            enum: ["new", "contacted", "converted", "closed"],
        },
    },
};

/**
 * Validate data against schema
 * @param {Object} data - Data to validate
 * @param {Object} schema - Schema definition
 * @return {Object} - {valid: boolean, errors: array}
 */
function validateSchema(data, schema) {
    const errors = [];

    for (const [field, rules] of Object.entries(schema)) {
        const value = data[field];

        if (rules.required &&
            (value === undefined || value === null || value === "")) {
            errors.push(`Field '${field}' is required`);
            continue;
        }

        if (!rules.required && (value === undefined || value === null)) {
            continue;
        }

        if (rules.type === "string" && typeof value !== "string") {
            errors.push(`Field '${field}' must be a string`);
        } else if (rules.type === "number" && typeof value !== "number") {
            errors.push(`Field '${field}' must be a number`);
        } else if (rules.type === "array" && !Array.isArray(value)) {
            errors.push(`Field '${field}' must be an array`);
        } else if (rules.type === "timestamp" &&
            !(value instanceof admin.firestore.Timestamp)) {
            errors.push(`Field '${field}' must be a timestamp`);
        }

        if (rules.maxLength && typeof value === "string" &&
            value.length > rules.maxLength) {
            errors.push(
                `Field '${field}' exceeds max length of ${rules.maxLength}`,
            );
        }

        if (rules.enum && !rules.enum.includes(value)) {
            errors.push(
                `Field '${field}' must be one of: ${rules.enum.join(", ")}`,
            );
        }

        if (rules.pattern && typeof value === "string" &&
            !rules.pattern.test(value)) {
            errors.push(`Field '${field}' has invalid format`);
        }
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}

// Validate job creation
exports.validateJobCreation = onDocumentCreated(
    "jobs/{jobId}",
    async (event) => {
        const data = event.data.data();
        const validation = validateSchema(data, schemas.job);

        if (!validation.valid) {
            logger.error("Invalid job data", {
                errors: validation.errors,
                data,
            });

            await notifyAdmin("Invalid Job Creation Request", {
                errors: validation.errors,
                jobId: event.params.jobId
            });

            await event.data.ref.delete();
            throw new Error(
                `Validation failed: ${validation.errors.join(", ")}`,
            );
        }

        logger.info("Job created successfully", {
            jobId: event.params.jobId,
        });
    },
);

// Validate application creation
exports.validateApplicationCreation = onDocumentCreated(
    "applications/{appId}",
    async (event) => {
        const data = event.data.data();
        const validation = validateSchema(data, schemas.application);

        if (!validation.valid) {
            logger.error("Invalid application data", {
                errors: validation.errors,
                data,
            });
            await event.data.ref.delete();
            throw new Error(
                `Validation failed: ${validation.errors.join(", ")}`,
            );
        }

        logger.info("Application created", {
            appId: event.params.appId,
        });
    },
);

// Validate inquiry creation
exports.validateInquiryCreation = onDocumentCreated(
    "inquiries/{inquiryId}",
    async (event) => {
        const data = event.data.data();
        const validation = validateSchema(data, schemas.inquiry);

        if (!validation.valid) {
            logger.error("Invalid inquiry data", {
                errors: validation.errors,
                data,
            });
            await event.data.ref.delete();
            throw new Error(
                `Validation failed: ${validation.errors.join(", ")}`,
            );
        }

        logger.info("Inquiry created", {
            inquiryId: event.params.inquiryId,
        });
    },
);

// Daily backup at 2 AM IST
exports.dailyBackup = onSchedule({
    schedule: "0 2 * * *",
    timeZone: "Asia/Kolkata",
}, async (event) => {
    const projectId = process.env.GCLOUD_PROJECT;
    const bucket = `gs://${projectId}-backups`;
    const timestamp = new Date().toISOString().split("T")[0];

    try {
        const client = new admin.firestore.v1.FirestoreAdminClient();
        const databaseName = client.databasePath(projectId, "(default)");

        const [operation] = await client.exportDocuments({
            name: databaseName,
            outputUriPrefix: `${bucket}/daily/${timestamp}`,
            collectionIds: ["jobs", "applications", "inquiries", "settings"],
        });

        logger.info("Daily backup initiated", {
            timestamp,
            operation: operation.name,
        });
        return { success: true, timestamp, operation: operation.name };
    } catch (error) {
        logger.error("Daily backup failed", { error: error.message });
        throw error;
    }
});

// Weekly backup every Sunday at 3 AM IST
exports.weeklyBackup = onSchedule({
    schedule: "0 3 * * 0",
    timeZone: "Asia/Kolkata",
}, async (event) => {
    const projectId = process.env.GCLOUD_PROJECT;
    const bucket = `gs://${projectId}-backups`;
    const timestamp = new Date().toISOString().split("T")[0];

    try {
        const client = new admin.firestore.v1.FirestoreAdminClient();
        const databaseName = client.databasePath(projectId, "(default)");

        const [operation] = await client.exportDocuments({
            name: databaseName,
            outputUriPrefix: `${bucket}/weekly/${timestamp}`,
        });

        logger.info("Weekly backup initiated", {
            timestamp,
            operation: operation.name,
        });
        return { success: true, timestamp, operation: operation.name };
    } catch (error) {
        logger.error("Weekly backup failed", { error: error.message });
        throw error;
    }
});

// Database migration endpoint
exports.runMigrations = onRequest({ cors: true }, async (req, res) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Unauthorized" });
    }

    try {
        const idToken = authHeader.split("Bearer ")[1];
        await admin.auth().verifyIdToken(idToken);
    } catch (error) {
        return res.status(401).json({ error: "Invalid token" });
    }

    const db = admin.firestore();
    const migrationsRef = db.collection("_migrations");

    try {
        const migrations = [
            {
                version: "1.0.0",
                name: "initial_schema",
                run: async () => {
                    logger.info("Running migration: initial_schema");
                    return { success: true };
                },
            },
            {
                version: "1.1.0",
                name: "add_status_fields",
                run: async () => {
                    const applicationsSnapshot = await db
                        .collection("applications").get();
                    const batch = db.batch();

                    applicationsSnapshot.forEach((doc) => {
                        if (!doc.data().status) {
                            batch.update(doc.ref, { status: "pending" });
                        }
                    });

                    await batch.commit();
                    logger.info("Added status fields to applications");
                    return { success: true };
                },
            },
        ];

        const completedMigrations = await migrationsRef.get();
        const completedVersions = new Set(
            completedMigrations.docs.map((doc) => doc.data().version),
        );

        const results = [];
        for (const migration of migrations) {
            if (!completedVersions.has(migration.version)) {
                logger.info(
                    `Running migration ${migration.version}: ${migration.name}`,
                );
                const result = await migration.run();

                await migrationsRef.doc(migration.version).set({
                    version: migration.version,
                    name: migration.name,
                    runAt: admin.firestore.FieldValue.serverTimestamp(),
                    result,
                });

                results.push({ version: migration.version, status: "completed" });
            } else {
                results.push({ version: migration.version, status: "already_run" });
            }
        }

        return res.status(200).json({
            success: true,
            migrations: results,
        });
    } catch (error) {
        logger.error("Migration failed", { error: error.message });
        return res.status(500).json({
            error: "Migration failed",
            message: error.message,
        });
    }
});

// Health check endpoint
exports.healthCheck = onRequest({ cors: true }, async (req, res) => {
    try {
        const db = admin.firestore();
        await db.collection("_health").doc("check").set({
            timestamp: admin.firestore.FieldValue.serverTimestamp(),
        });

        return res.status(200).json({
            status: "healthy",
            timestamp: new Date().toISOString(),
            services: {
                firestore: "operational",
                functions: "operational",
            },
        });
    } catch (error) {
        logger.error("Health check failed", { error: error.message });
        return res.status(500).json({
            status: "unhealthy",
            error: error.message,
        });
    }
});

// Newsletter Subscription Trigger
exports.onNewsletterSignup = onDocumentCreated(
    "newsletter/{subscriptionId}",
    async (event) => {
        const snapshot = event.data;
        if (!snapshot) {
            console.log("No data associated with the event");
            return;
        }
        const data = snapshot.data();
        const email = data.email;

        try {
            // 1. Send notification to the company
            await transporter.sendMail({
                from: '"Techno Vanam System" <official@technovanam.in>',
                to: "official@technovanam.in",
                subject: "New Newsletter Subscription",
                text: `New newsletter subscription from: ${email}`,
                html: `
                    <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                        <h2 style="color: #71d300;">New Subscriber Alert</h2>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Source:</strong> Website Footer</p>
                        <p><strong>Timestamp:</strong> ${new Date().toLocaleString()}</p>
                    </div>
                `,
            });

            // 2. Send welcome email to the subscriber
            await transporter.sendMail({
                from: '"Techno Vanam" <official@technovanam.in>',
                to: email,
                subject: "Welcome to the Future of Digital Excellence! ✨ Techno Vanam",
                html: `
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333; line-height: 1.6;">
                        <div style="text-align: center; margin-bottom: 30px;">
                            <h1 style="color: #71d300; margin: 0; font-size: 24px; letter-spacing: 2px;">✨ WELCOME TO TECHNO VANAM ✨</h1>
                        </div>
                        
                        <p>Hi there!</p>
                        
                        <p>We're thrilled to have you join our exclusive circle of digital innovators! You’ve just taken the first step towards staying ahead in the rapidly evolving digital landscape.</p>
                        
                        <hr style="border: none; border-top: 1px solid #71d300; margin: 30px 0;">
                        
                        <h2 style="color: #71d300; font-size: 18px; text-transform: uppercase;">🚀 What to Expect:</h2>
                        
                        <ul style="list-style: none; padding-left: 0;">
                            <li style="margin-bottom: 15px;">
                                <span style="color: #71d300; font-weight: bold; margin-right: 10px;">🔹</span>
                                <strong style="color: #000;">STUNNING DESIGN:</strong> Get insights into modern UI/UX trends.
                            </li>
                            <li style="margin-bottom: 15px;">
                                <span style="color: #71d300; font-weight: bold; margin-right: 10px;">🔹</span>
                                <strong style="color: #000;">CUTTING-EDGE TECH:</strong> Stay updated with the latest in Web & Mobile development.
                            </li>
                            <li style="margin-bottom: 15px;">
                                <span style="color: #71d300; font-weight: bold; margin-right: 10px;">🔹</span>
                                <strong style="color: #000;">INDUSTRY INSIGHTS:</strong> Deep dives into how we solve complex business challenges.
                            </li>
                            <li style="margin-bottom: 15px;">
                                <span style="color: #71d300; font-weight: bold; margin-right: 10px;">🔹</span>
                                <strong style="color: #000;">EARLY ACCESS:</strong> Be the first to know about our new product launches.
                            </li>
                        </ul>
                        
                        <hr style="border: none; border-top: 1px solid #71d300; margin: 30px 0;">
                        
                        <p>Stay tuned for our next update! In the meantime, feel free to explore our latest projects or connect with us on social media.</p>
                        
                        <div style="text-align: center; margin-top: 30px;">
                            <a href="https://technovanam.in/services" style="display: inline-block; padding: 12px 24px; background-color: #71d300; color: #fff; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 0 10px;">🌐 Explore Our Work</a>
                        </div>
                        
                        <div style="margin-top: 40px; font-size: 14px; text-align: center; color: #777;">
                            <p>Let's design the digital future together.</p>
                            <p>Warm regards,<br><strong>The Techno Vanam Team</strong></p>
                        </div>
                        
                        <div style="margin-top: 20px; font-size: 12px; text-align: center; color: #aaa;">
                            <p>Techno Vanam - Designing Digital Future</p>
                            <p><a href="https://www.instagram.com/technovanam.in/" style="color: #71d300; text-decoration: none;">📸 Follow us on Instagram</a></p>
                        </div>
                    </div>
                `,
            });

            logger.info("Newsletter emails sent successfully", { email });
        } catch (error) {
            logger.error("Failed to send newsletter emails", {
                error: error.message,
                stack: error.stack,
                code: error.code,
                command: error.command,
                email
            });
            // Log to Firestore for easy debugging
            await admin.firestore().collection("mail_errors").add({
                email,
                error: error.message,
                code: error.code || "unknown",
                timestamp: admin.firestore.FieldValue.serverTimestamp()
            });
        }
    }
);
