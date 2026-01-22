import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { email } = req.body;

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

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
        </div>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ message: 'Failed to send emails', error: error.message });
    }
}
