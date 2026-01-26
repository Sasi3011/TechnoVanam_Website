import { db } from './lib/firebase-admin.js';
import { sendAdminNotification, sendAutoReply } from './lib/brevo.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const data = req.body;

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    try {
        // Save to Firestore
        const inquiryRef = await db.collection('inquiries').add({
            name: data.name.trim(),
            email: data.email.toLowerCase().trim(),
            company: data.company?.trim() || '',
            website: data.website?.trim() || '',
            services: data.services || '',
            projectType: data.projectType || '',
            deadline: data.deadline || '',
            message: data.message.trim(),
            submittedAt: new Date(),
            status: 'new',
            createdAt: new Date(),
            updatedAt: new Date()
        });

        // Prepare inquiry data for emails
        const inquiryData = {
            id: inquiryRef.id,
            name: data.name.trim(),
            email: data.email.toLowerCase().trim(),
            company: data.company?.trim() || '',
            website: data.website?.trim() || '',
            services: data.services || '',
            projectType: data.projectType || '',
            deadline: data.deadline || '',
            message: data.message.trim(),
        };

        // Send emails via Brevo (non-blocking)
        Promise.all([
            sendAdminNotification(inquiryData).catch(err => {
                console.error('Failed to send admin notification:', err);
            }),
            sendAutoReply(inquiryData).catch(err => {
                console.error('Failed to send auto-reply:', err);
            }),
        ]).catch(err => {
            console.error('Email sending error:', err);
        });

        return res.status(200).json({ 
            success: true, 
            message: 'Inquiry saved successfully. Emails are being sent.',
            id: inquiryRef.id 
        });
    } catch (error) {
        console.error('Contact form error:', error);
        return res.status(500).json({ 
            message: 'Failed to process inquiry', 
            error: error.message 
        });
    }
}
