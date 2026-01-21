/**
 * One-time script to create the admin user in Firebase Authentication
 * 
 * Run this script once with: node create-admin-user.js
 * 
 * Make sure you have:
 * 1. Firebase Admin SDK service account key (download from Firebase Console)
 * 2. Save it as 'serviceAccountKey.json' in the project root
 * 
 * OR use environment variables:
 * - GOOGLE_APPLICATION_CREDENTIALS pointing to your service account key
 */

import admin from 'firebase-admin';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Try to load service account key
let serviceAccount;
try {
  const keyPath = join(__dirname, 'serviceAccountKey.json');
  serviceAccount = JSON.parse(readFileSync(keyPath, 'utf8'));
} catch (error) {
  console.error('Error: Could not find serviceAccountKey.json');
  console.error('Please download your Firebase service account key from:');
  console.error('Firebase Console > Project Settings > Service Accounts > Generate New Private Key');
  console.error('Save it as "serviceAccountKey.json" in the project root');
  process.exit(1);
}

// Initialize Firebase Admin
try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });
} catch (error) {
  console.error('Error initializing Firebase Admin:', error.message);
  process.exit(1);
}

const adminEmail = 'official@technovanam.in';
const adminPassword = 'TechnoVanam@123!@#';

async function createAdminUser() {
  try {
    // Check if user already exists
    let user;
    try {
      user = await admin.auth().getUserByEmail(adminEmail);
      console.log(`User ${adminEmail} already exists.`);
      console.log('Updating password...');
      await admin.auth().updateUser(user.uid, {
        password: adminPassword
      });
      console.log('✅ Password updated successfully!');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        // User doesn't exist, create it
        console.log(`Creating admin user: ${adminEmail}...`);
        user = await admin.auth().createUser({
          email: adminEmail,
          password: adminPassword,
          emailVerified: true
        });
        console.log('✅ Admin user created successfully!');
      } else {
        throw error;
      }
    }

    // Set custom claims (optional - for role-based access)
    try {
      await admin.auth().setCustomUserClaims(user.uid, {
        admin: true,
        role: 'admin'
      });
      console.log('✅ Admin role assigned!');
    } catch (error) {
      console.warn('Warning: Could not set custom claims:', error.message);
    }

    console.log('\n✅ Setup complete!');
    console.log(`Email: ${adminEmail}`);
    console.log(`Password: ${adminPassword}`);
    console.log('\nYou can now login to the admin panel.');
    
    process.exit(0);
  } catch (error) {
    console.error('Error creating admin user:', error.message);
    process.exit(1);
  }
}

createAdminUser();

