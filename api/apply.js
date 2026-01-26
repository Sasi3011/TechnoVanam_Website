import { db } from './lib/firebase-admin.js';
import { sendApplicationEmails } from './lib/brevo.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const data = req.body;

    // Validate required fields
    if (!data.name || !data.email || !data.phone || !data.role || !data.resume_link) {
        return res.status(400).json({ message: 'Name, email, phone, role, and resume link are required' });
    }

    try {
        // Save to Firestore
        const applicationRef = await db.collection('applications').add({
            name: data.name.trim(),
            email: data.email.toLowerCase().trim(),
            phone: data.phone.trim(),
            role: data.role,
            type: data.type || '',
            portfolio: data.portfolio?.trim() || '',
            resume_link: data.resume_link.trim(),
            note: data.note?.trim() || '',
            submittedAt: new Date(),
            status: 'new',
            createdAt: new Date(),
            updatedAt: new Date()
        });

        // Prepare application data for emails
        const applicationData = {
            id: applicationRef.id,
            name: data.name.trim(),
            email: data.email.toLowerCase().trim(),
            phone: data.phone.trim(),
            role: data.role,
            type: data.type || '',
            portfolio: data.portfolio?.trim() || '',
            resume_link: data.resume_link.trim(),
            note: data.note?.trim() || '',
        };

        // Send emails via Brevo (non-blocking)
        sendApplicationEmails(applicationData).catch(err => {
            console.error('Failed to send application emails:', err);
        });

        return res.status(200).json({ 
            success: true, 
            message: 'Application saved successfully. Emails are being sent.',
            id: applicationRef.id 
        });
    } catch (error) {
        console.error('Job application error:', error);
        return res.status(500).json({ 
            message: 'Failed to process application', 
            error: error.message 
        });
    }
}
