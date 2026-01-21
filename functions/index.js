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

admin.initializeApp();
setGlobalOptions({
    maxInstances: 10,
    region: 'asia-south1'
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
