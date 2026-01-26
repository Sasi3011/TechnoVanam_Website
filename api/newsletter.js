import { db } from './lib/firebase-admin.js';
import { sendNewsletterEmails } from './lib/brevo.js';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    try {
        const emailLower = email.toLowerCase().trim();
        
        // Check if email already exists
        const existingDoc = await db.collection('newsletter')
            .where('email', '==', emailLower)
            .limit(1)
            .get();

        // Check if email already exists BEFORE saving
        if (!existingDoc.empty) {
            // Email already exists - return specific response
            console.log('Email already exists in database:', email);
            
            // Still send welcome email (confirmation)
            const subscriptionData = {
                email: emailLower,
                isNew: false,
                id: existingDoc.docs[0].id,
            };

            // Send welcome email (non-blocking)
            sendNewsletterEmails(subscriptionData)
                .then(() => {
                    console.log('✅ Newsletter confirmation email sent to existing subscriber');
                })
                .catch(err => {
                    console.error('⚠️  Failed to send newsletter emails:', err.message);
                });

            return res.status(200).json({ 
                success: true,
                alreadyExists: true,
                message: 'This email is already subscribed to our newsletter.',
                id: existingDoc.docs[0].id 
            });
        }

        // Email is new - create new document
        const newsletterRef = await db.collection('newsletter').add({
            email: emailLower,
            source: 'Newsletter Subscription',
            subscribedAt: new Date(),
            status: 'active'
        });

        console.log('✅ New newsletter subscription saved to Firestore:', newsletterRef.id);

        // Prepare subscription data for emails
        const subscriptionData = {
            email: emailLower,
            isNew: true,
            id: newsletterRef.id,
        };

        // Send emails via Brevo (non-blocking)
        // Always sends: 1) Admin notification, 2) Welcome/confirmation email to subscriber
        sendNewsletterEmails(subscriptionData)
            .then(() => {
                console.log('✅ Newsletter emails sent successfully');
            })
            .catch(err => {
                console.error('⚠️  Failed to send newsletter emails:', err.message);
            });

        return res.status(200).json({ 
            success: true,
            alreadyExists: false,
            message: 'Subscription saved successfully. Welcome email is being sent.',
            id: newsletterRef.id 
        });
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return res.status(500).json({ 
            message: 'Failed to process subscription', 
            error: error.message 
        });
    }
}
