// Local development server for API routes
// Run with: node server.js
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import { initializeApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { sendAdminNotification, sendAutoReply, sendNewsletterEmails, sendApplicationEmails } from './api/lib/brevo.js';

// Load .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '.env') });

// Support both VITE_ prefixed (for frontend) and non-prefixed (for backend) variables
const getEnvVar = (name) => {
  return process.env[name] || process.env[`VITE_${name}`];
};

// Get Firebase credentials (check both with and without VITE_ prefix)
const firebaseProjectId = getEnvVar('FIREBASE_PROJECT_ID');
const firebaseClientEmail = getEnvVar('FIREBASE_CLIENT_EMAIL');
const firebasePrivateKey = getEnvVar('FIREBASE_PRIVATE_KEY');

// Debug: Check if env vars are loaded
console.log('🔍 Checking environment variables...');
console.log('FIREBASE_PROJECT_ID:', firebaseProjectId ? `✅ Set (${firebaseProjectId.substring(0, 20)}...)` : '❌ Missing');
console.log('FIREBASE_CLIENT_EMAIL:', firebaseClientEmail ? `✅ Set (${firebaseClientEmail.substring(0, 30)}...)` : '❌ Missing');
console.log('FIREBASE_PRIVATE_KEY:', firebasePrivateKey ? `✅ Set (${firebasePrivateKey.substring(0, 30)}...)` : '❌ Missing');

// Check Brevo API key (support both with and without VITE_ prefix)
const brevoApiKey = process.env.BREVO_API_KEY || process.env.VITE_BREVO_API_KEY;
if (brevoApiKey) {
  const cleanKey = brevoApiKey.trim().replace(/^["']|["']$/g, '');
  console.log('BREVO_API_KEY:', `✅ Set (${cleanKey.substring(0, 15)}...)`);
  console.log('   Key length:', cleanKey.length);
  console.log('   Key format:', cleanKey.startsWith('xkeysib-') || cleanKey.startsWith('xsmtpsib-') ? '✅ Valid' : '❌ Invalid (should start with xkeysib- or xsmtpsib-)');
} else {
  console.warn('⚠️  BREVO_API_KEY not found in environment variables!');
  console.warn('   Please add BREVO_API_KEY to your .env file');
  console.warn('   Current .env path:', resolve(__dirname, '.env'));
}

// Initialize Firebase Admin
if (!firebaseProjectId || !firebaseClientEmail || !firebasePrivateKey) {
  console.error('⚠️  Firebase environment variables not set!');
  console.error('Please add these to your .env file:');
  console.error('  FIREBASE_PROJECT_ID=techno-vanam');
  console.error('  FIREBASE_CLIENT_EMAIL=firebase-adminsdk-...');
  console.error('  FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\\n..."');
  process.exit(1);
}

if (!process.env.BREVO_API_KEY) {
  console.warn('⚠️  BREVO_API_KEY not set! Email sending will fail.');
  console.warn('Please add BREVO_API_KEY to your .env file');
}

try {
  initializeApp({
    credential: cert({
      projectId: firebaseProjectId,
      clientEmail: firebaseClientEmail,
      privateKey: firebasePrivateKey.replace(/\\n/g, '\n'),
    }),
  });
  console.log('✅ Firebase Admin initialized');
} catch (error) {
  console.error('❌ Firebase Admin initialization failed:', error.message);
  process.exit(1);
}

const db = getFirestore();
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Newsletter API
app.post('/api/newsletter', async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    const emailLower = email.toLowerCase().trim();
    
    // Check if email already exists BEFORE saving
    const existingDoc = await db.collection('newsletter')
      .where('email', '==', emailLower)
      .limit(1)
      .get();

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
      sendNewsletterEmails(subscriptionData).catch(err => {
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
    sendNewsletterEmails(subscriptionData).catch(err => {
      console.error('⚠️  Failed to send newsletter emails:', err.message);
    });

    res.status(200).json({ 
      success: true,
      alreadyExists: false,
      message: 'Subscription saved successfully. Welcome email is being sent.',
      id: newsletterRef.id
    });
  } catch (error) {
    console.error('Newsletter error:', error);
    res.status(500).json({ message: 'Failed to process subscription', error: error.message });
  }
});

// Contact API
app.post('/api/contact', async (req, res) => {
  try {
    const data = req.body;

    if (!data.name || !data.email || !data.message) {
      return res.status(400).json({ message: 'Name, email, and message are required' });
    }

    // Save to Firestore first (this should always work)
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

    console.log('✅ Inquiry saved to Firestore:', inquiryRef.id);

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
        console.error('⚠️  Failed to send admin notification:', err.message);
      }),
      sendAutoReply(inquiryData).catch(err => {
        console.error('⚠️  Failed to send auto-reply:', err.message);
      }),
    ]).catch(err => {
      console.error('Email sending error:', err.message);
    });

    // Return success immediately (data is saved)
    res.status(200).json({ 
      success: true, 
      message: 'Inquiry saved successfully',
      id: inquiryRef.id,
      note: 'Emails are being sent in the background'
    });
  } catch (error) {
    console.error('Contact error:', error);
    res.status(500).json({ message: 'Failed to process inquiry', error: error.message });
  }
});

// Job Application API
app.post('/api/apply', async (req, res) => {
  try {
    const data = req.body;

    if (!data.name || !data.email || !data.phone || !data.role || !data.resume_link) {
      return res.status(400).json({ message: 'Name, email, phone, role, and resume link are required' });
    }

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

    console.log('✅ Application saved to Firestore:', applicationRef.id);

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
      console.error('⚠️  Failed to send application emails:', err.message);
    });

    // Return success immediately (data is saved)
    res.status(200).json({ 
      success: true, 
      message: 'Application saved successfully',
      id: applicationRef.id,
      note: 'Emails are being sent in the background'
    });
  } catch (error) {
    console.error('Application error:', error);
    res.status(500).json({ message: 'Failed to process application', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 Local API server running on http://localhost:${PORT}`);
  console.log(`📧 API endpoints available:`);
  console.log(`   POST http://localhost:${PORT}/api/newsletter`);
  console.log(`   POST http://localhost:${PORT}/api/contact`);
  console.log(`   POST http://localhost:${PORT}/api/apply`);
});
