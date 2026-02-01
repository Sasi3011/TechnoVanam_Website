/**
 * Firebase Cloud Functions for Techno Vanam
 * Includes: API (Express), Triggers, Schema validation, Error handling, Automated backups
 */

const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/v2/https");
const { onSchedule } = require("firebase-functions/v2/scheduler");
const { onDocumentCreated } = require("firebase-functions/v2/firestore");
const admin = require("firebase-admin");
const logger = require("firebase-functions/logger");
const nodemailer = require("nodemailer");
const express = require("express");
const cors = require("cors");

admin.initializeApp();
setGlobalOptions({
    maxInstances: 10,
    region: "asia-south1",
});

// Email transporter configuration
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: "official@technovanam.in",
        pass: "pxqf ppsa whwb lskm", // App Password
    },
});

// ============================================
// EXPRESS API (Handles /api/...)
// ============================================

const app = express();
app.use(cors({ origin: true }));
app.use(express.json());

// 1. Newsletter Endpoint
app.post("/newsletter", async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) return res.status(400).json({ message: "Email is required" });

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) return res.status(400).json({ message: "Invalid email format" });

        const emailLower = email.toLowerCase().trim();
        const db = admin.firestore();

        // Check if exists
        const existingDoc = await db.collection("newsletter")
            .where("email", "==", emailLower)
            .limit(1)
            .get();

        if (!existingDoc.empty) {
            return res.status(200).json({
                success: true,
                alreadyExists: true,
                message: "This email is already subscribed to our newsletter.",
                id: existingDoc.docs[0].id
            });
        }

        // Create new
        const docRef = await db.collection("newsletter").add({
            email: emailLower,
            source: "Website Footer",
            subscribedAt: admin.firestore.FieldValue.serverTimestamp(),
            status: "active"
        });

        res.status(200).json({
            success: true,
            alreadyExists: false,
            message: "Subscription successful",
            id: docRef.id
        });
    } catch (error) {
        logger.error("Newsletter API Error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// 2. Contact Endpoint
app.post("/contact", async (req, res) => {
    try {
        const data = req.body;
        if (!data.name || !data.email || !data.message) {
            return res.status(400).json({ message: "Name, email, and message are required" });
        }

        const db = admin.firestore();
        const docRef = await db.collection("inquiries").add({
            name: data.name.trim(),
            email: data.email.toLowerCase().trim(),
            company: data.company?.trim() || "",
            website: data.website?.trim() || "",
            services: data.services || "",
            projectType: data.projectType || "",
            deadline: data.deadline || "",
            message: data.message.trim(),
            submittedAt: admin.firestore.FieldValue.serverTimestamp(),
            status: "new"
        });

        res.status(200).json({
            success: true,
            message: "Inquiry received",
            id: docRef.id
        });
    } catch (error) {
        logger.error("Contact API Error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// 3. Apply Endpoint
app.post("/apply", async (req, res) => {
    try {
        const data = req.body;
        if (!data.name || !data.email || !data.phone || !data.role || !data.resume_link) {
            return res.status(400).json({ message: "Missing required fields" });
        }

        const db = admin.firestore();
        const docRef = await db.collection("applications").add({
            name: data.name.trim(),
            email: data.email.toLowerCase().trim(),
            phone: data.phone.trim(),
            role: data.role,
            type: data.type || "",
            portfolio: data.portfolio?.trim() || "",
            resume_link: data.resume_link.trim(),
            note: data.note?.trim() || "",
            submittedAt: admin.firestore.FieldValue.serverTimestamp(),
            status: "new"
        });

        res.status(200).json({
            success: true,
            message: "Application received",
            id: docRef.id
        });
    } catch (error) {
        logger.error("Apply API Error", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

exports.api = onRequest({ cors: true }, app);


// ============================================
// EMAIL TRIGGERS (Nodemailer)
// ============================================

// 1. Newsletter Trigger
exports.onNewsletterSignup = onDocumentCreated("newsletter/{id}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;
    const data = snapshot.data();
    const email = data.email;

    try {
        // Admin Notification
        await transporter.sendMail({
            from: '"Techno Vanam System" <official@technovanam.in>',
            to: "official@technovanam.in",
            subject: "New Newsletter Subscription",
            html: `
            <div style="font-family: sans-serif; padding: 20px; border: 1px solid #71d300; border-radius: 10px;">
                <h2 style="color: #71d300;">New Subscriber Alert</h2>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Source:</strong> ${data.source || 'Website'}</p>
                <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
            </div>`
        });

        // Welcome Email
        await transporter.sendMail({
            from: '"Techno Vanam" <official@technovanam.in>',
            to: email,
            subject: "Welcome to the Future of Digital Excellence! ✨ Techno Vanam",
            // Using polished template
            html: `
            <!DOCTYPE html>
            <html>
            <body style="margin:0;padding:20px;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;background-color:#f5f5f5;">
              <table role="presentation" style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1);border-collapse:collapse;">
                <tr>
                  <td style="background:#000;padding:40px 30px;text-align:center;">
                     <h1 style="color:#71d300;margin:0;font-size:24px;letter-spacing:2px;">✨ WELCOME TO TECHNO VANAM ✨</h1>
                  </td>
                </tr>
                <tr>
                  <td style="padding:40px;">
                    <p style="margin-bottom:20px;color:#333;">Hi there!</p>
                    <p style="margin-bottom:20px;color:#333;">We're thrilled to have you join our exclusive circle of digital innovators! You’ve just taken the first step towards staying ahead in the rapidly evolving digital landscape.</p>
                    <hr style="border:0;border-top:1px solid #71d300;margin:30px 0;">
                    <h2 style="color:#71d300;font-size:18px;text-transform:uppercase;">🚀 What to Expect:</h2>
                    <ul style="list-style:none;padding:0;">
                      <li style="margin-bottom:10px;"><strong style="color:#71d300;">🔹 STUNNING DESIGN:</strong> Insights into modern UI/UX trends.</li>
                      <li style="margin-bottom:10px;"><strong style="color:#71d300;">🔹 CUTTING-EDGE TECH:</strong> Latest in Web & Mobile development.</li>
                      <li style="margin-bottom:10px;"><strong style="color:#71d300;">🔹 EARLY ACCESS:</strong> Be the first to know about new launches.</li>
                    </ul>
                    <hr style="border:0;border-top:1px solid #71d300;margin:30px 0;">
                    <div style="text-align:center;margin-top:30px;">
                      <a href="https://technovanam.in/services" style="display:inline-block;padding:12px 24px;background-color:#71d300;color:#fff;text-decoration:none;border-radius:5px;font-weight:bold;">🌐 Explore Our Work</a>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f9fafb;padding:20px;text-align:center;color:#6b7280;font-size:12px;">
                    <p>Techno Vanam - Designing Digital Future</p>
                  </td>
                </tr>
              </table>
            </body>
            </html>
            `
        });
        logger.info("Newsletter emails sent", { email });
    } catch (err) {
        logger.error("Newsletter email failed", err);
    }
});

// 2. Inquiry Trigger
exports.onInquiryCreated = onDocumentCreated("inquiries/{id}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;
    const data = snapshot.data();

    try {
        // Admin Notification
        await transporter.sendMail({
            from: '"Techno Vanam System" <official@technovanam.in>',
            to: "official@technovanam.in",
            replyTo: data.email,
            subject: `New Inquiry: ${data.name}`,
            html: `
            <div style="font-family:sans-serif;padding:20px;border:1px solid #ddd;border-radius:8px;">
              <h2 style="color:#71d300;border-bottom:2px solid #71d300;padding-bottom:10px;">New Project Inquiry</h2>
              <p><strong>Name:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Company:</strong> ${data.company || '-'}</p>
              <p><strong>Services:</strong> ${data.services || '-'}</p>
              <p><strong>Message:</strong><br><br>${(data.message || '').replace(/\n/g, '<br>')}</p>
            </div>`
        });

        // Auto-reply
        await transporter.sendMail({
            from: '"Techno Vanam" <official@technovanam.in>',
            to: data.email,
            subject: "We've received your inquiry - Techno Vanam",
            html: `
            <!DOCTYPE html>
            <html>
            <body style="margin:0;padding:20px;font-family:sans-serif;background-color:#f5f5f5;">
              <table role="presentation" style="max-width:600px;margin:0 auto;background-color:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 6px rgba(0,0,0,0.1);">
                <tr>
                  <td style="background:#000;padding:30px;text-align:center;">
                    <h1 style="color:#71d300;margin:0;">Hello ${data.name}! 👋</h1>
                  </td>
                </tr>
                <tr>
                   <td style="padding:40px;">
                     <p>Thank you for reaching out to <strong>Techno Vanam</strong>. We've received your inquiry and are excited to learn more about your project.</p>
                     <p>Our team will review your details and get back to you within <strong>24 business hours</strong>.</p>
                     <div style="background:#f0fdf4;border-left:4px solid #71d300;padding:20px;margin:20px 0;border-radius:4px;">
                       <h3 style="margin:0 0 10px 0;color:#166534;">What's Next?</h3>
                       <p style="margin:0;color:#166534;">1. Requirement review<br>2. Scheduler discovery call<br>3. Tailored proposal</p>
                     </div>
                     <p style="text-align:center;margin-top:30px;">
                       <a href="https://technovanam.in" style="background:#71d300;color:#fff;padding:12px 24px;text-decoration:none;border-radius:6px;font-weight:bold;">Visit Our Website</a>
                     </p>
                   </td>
                </tr>
              </table>
            </body>
            </html>`
        });
        logger.info("Inquiry emails sent", { email: data.email });
    } catch (err) {
        logger.error("Inquiry email failed", err);
    }
});

// 3. Application Trigger
exports.onApplicationCreated = onDocumentCreated("applications/{id}", async (event) => {
    const snapshot = event.data;
    if (!snapshot) return;
    const data = snapshot.data();

    try {
        // Admin
        await transporter.sendMail({
            from: '"Techno Vanam Careers" <official@technovanam.in>',
            to: "official@technovanam.in",
            subject: `Job Application: ${data.name} - ${data.role}`,
            html: `
            <div style="font-family:sans-serif;padding:20px;">
              <h2 style="color:#71d300;">New Job Application</h2>
              <p><strong>Role:</strong> ${data.role}</p>
              <p><strong>Candidate:</strong> ${data.name}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>Resume:</strong> <a href="${data.resume_link}">${data.resume_link}</a></p>
              <p><strong>Portfolio:</strong> ${data.portfolio || '-'}</p>
            </div>`
        });

        // Candidate
        await transporter.sendMail({
            from: '"Techno Vanam" <official@technovanam.in>',
            to: data.email,
            subject: `Application Received: ${data.role} ✨ Techno Vanam`,
            html: `
            <!DOCTYPE html>
            <html>
            <body style="margin:0;padding:20px;font-family:sans-serif;background-color:#f5f5f5;">
               <table role="presentation" style="max-width:600px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;">
                 <tr>
                   <td style="background:#000;padding:30px;text-align:center;">
                     <h2 style="color:#71d300;margin:0;">Hi ${data.name}!</h2>
                   </td>
                 </tr>
                 <tr>
                   <td style="padding:40px;">
                     <p>Thank you for applying for the <strong>${data.role}</strong> position at Techno Vanam.</p>
                     <p>We've received your application and will review your profile. If your skills match our needs, we will be in touch!</p>
                     <p>Stay creative!</p>
                   </td>
                 </tr>
               </table>
            </body>
            </html>`
        });
        logger.info("Application emails sent", { email: data.email });
    } catch (err) {
        logger.error("Application email failed", err);
    }
});


// ============================================
// BACKUPS & UTILS (Existing)
// ============================================

exports.healthCheck = onRequest({ cors: true }, async (req, res) => {
    res.status(200).json({ status: "healthy", timestamp: new Date() });
});

exports.dailyBackup = onSchedule({
    schedule: "0 2 * * *",
    timeZone: "Asia/Kolkata",
}, async () => {
    const projectId = process.env.GCLOUD_PROJECT;
    const bucket = `gs://${projectId}-backups`;
    try {
        const client = new admin.firestore.v1.FirestoreAdminClient();
        const databaseName = client.databasePath(projectId, "(default)");
        await client.exportDocuments({
            name: databaseName,
            outputUriPrefix: `${bucket}/daily/${new Date().toISOString().split("T")[0]}`,
            collectionIds: ["jobs", "applications", "inquiries", "newsletter"],
        });
        logger.info("Daily backup success");
    } catch (e) {
        logger.error("Backup failed", e);
    }
});
