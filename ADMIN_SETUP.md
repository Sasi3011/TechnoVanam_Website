# Admin User Setup Guide

The admin user needs to be created in Firebase Authentication before you can login.

## Option 1: Create User via Firebase Console (Easiest)

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project: **techno-vanam**
3. Navigate to **Authentication** > **Users**
4. Click **Add user**
5. Enter:
   - **Email**: `official@technovanam.in`
   - **Password**: `TechnoVanam@123!@#`
6. Click **Add user**
7. ✅ Done! You can now login to the admin panel.

## Option 2: Use Firebase CLI

If you prefer using the command line:

```bash
# Make sure you're logged in to Firebase
firebase login

# Create the user using Firebase CLI (requires Node.js script)
node create-admin-user.js
```

**Note**: For Option 2, you'll need to:
1. Download your Firebase service account key from Firebase Console
2. Go to: Project Settings > Service Accounts > Generate New Private Key
3. Save it as `serviceAccountKey.json` in the project root
4. Run the script

## Option 3: Use Firebase CLI Auth Import

1. Create a file `users.json`:
```json
{
  "users": [
    {
      "localId": "admin-user",
      "email": "official@technovanam.in",
      "emailVerified": true,
      "passwordHash": "BASE64_ENCODED_PASSWORD_HASH",
      "salt": "BASE64_ENCODED_SALT"
    }
  ]
}
```

2. Use Firebase CLI to import (requires password hashing - complex)

**Recommendation**: Use **Option 1** (Firebase Console) - it's the simplest and fastest!

