
export default function handler(req, res) {
    res.status(200).json({
        message: 'API is working!',
        time: new Date().toISOString(),
        env: {
            hasFirebaseProject: !!process.env.FIREBASE_PROJECT_ID,
            hasClientEmail: !!process.env.FIREBASE_CLIENT_EMAIL,
            hasPrivateKey: !!process.env.FIREBASE_PRIVATE_KEY,
            privateKeyLength: process.env.FIREBASE_PRIVATE_KEY ? process.env.FIREBASE_PRIVATE_KEY.length : 0,
            hasBrevoKey: !!process.env.BREVO_API_KEY
        }
    });
}
