import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const data = req.body;

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
            from: `"Techno Vanam Inquiry" <official@technovanam.in>`,
            to: "official@technovanam.in",
            replyTo: data.email,
            subject: `New Inquiry: ${data.name} - ${data.projectType || 'Project'}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #71d300; border-radius: 15px;">
          <h2 style="color: #71d300; border-bottom: 2px solid #71d300; padding-bottom: 10px;">New Project Inquiry</h2>
          <div style="margin-top: 20px;">
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.company || 'N/A'}</p>
            <p><strong>Website:</strong> ${data.website || 'N/A'}</p>
            <p><strong>Project Type:</strong> ${data.projectType || 'N/A'}</p>
            <p><strong>Deadline:</strong> ${data.deadline || 'N/A'}</p>
            <p><strong>Services:</strong> ${Array.isArray(data.services) ? data.services.join(', ') : data.services || 'N/A'}</p>
            <p><strong>Message:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #71d300;">
              ${data.message}
            </div>
          </div>
          <p style="font-size: 12px; color: #777; margin-top: 30px;">
            Submitted on ${new Date().toLocaleString()} from Website Contact Form
          </p>
        </div>
      `,
        });

        // 2. Send automated acknowledgment to the client
        await transporter.sendMail({
            from: '"Techno Vanam" <official@technovanam.in>',
            to: data.email,
            subject: "We've received your inquiry! ✨ Techno Vanam",
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eee; border-radius: 15px;">
          <h1 style="color: #71d300; text-align: center;">Hello ${data.name}!</h1>
          <p>Thank you for reaching out to <strong>Techno Vanam</strong>. We're excited to learn more about your project!</p>
          <p>This is just a quick note to let you know that we've received your inquiry. Our team is currently reviewing your details and will get back to you within 24 business hours to discuss the next steps.</p>
          
          <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 25px 0;">
            <p style="margin: 0; color: #166534; font-weight: bold;">What's next?</p>
            <ul style="color: #166534; padding-left: 20px;">
              <li>Reviewing your project requirements</li>
              <li>Hand-picking the best experts for your needs</li>
              <li>Scheduling a discovery call</li>
            </ul>
          </div>

          <p>In the meantime, feel free to check out our <a href="https://technovanam.in/services" style="color: #71d300; text-decoration: none; font-weight: bold;">latest work</a> or follow us on <a href="https://instagram.com/technovanam.in" style="color: #71d300; text-decoration: none; font-weight: bold;">Instagram</a>.</p>
          
          <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
          
          <p style="text-align: center; color: #999; font-size: 14px;">
            Techno Vanam — Designing Digital Future<br>
            <a href="https://technovanam.in" style="color: #71d300; text-decoration: none;">technovanam.in</a>
          </p>
        </div>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        return res.status(500).json({ message: 'Failed to send emails', error: error.message });
    }
}
