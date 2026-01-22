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
            from: `"Techno Vanam Careers" <official@technovanam.in>`,
            to: "official@technovanam.in",
            replyTo: data.email,
            subject: `Job Application: ${data.name} - ${data.role}`,
            html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #71d300; border-radius: 15px;">
          <h2 style="color: #71d300; border-bottom: 2px solid #71d300; padding-bottom: 10px;">New Job Application</h2>
          <div style="margin-top: 20px;">
            <p><strong>Applying for:</strong> ${data.role} (${data.type})</p>
            <p><strong>Candidate Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Portfolio:</strong> ${data.portfolio || 'N/A'}</p>
            <p><strong>Resume Link:</strong> <a href="${data.resume_link}">${data.resume_link}</a></p>
            <p><strong>Note:</strong></p>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #71d300;">
              ${data.note || 'No additional note provided.'}
            </div>
          </div>
          <p style="font-size: 12px; color: #777; margin-top: 30px;">
            Submitted on ${new Date().toLocaleString()} from Careers Page Application Form
          </p>
        </div>
      `,
        });

        // 2. Send automated acknowledgment to the candidate
        await transporter.sendMail({
            from: '"Techno Vanam" <official@technovanam.in>',
            to: data.email,
            subject: `Application Received: ${data.role} ✨ Techno Vanam`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 30px; border: 1px solid #eee; border-radius: 15px;">
          <h2 style="color: #71d300; text-align: center;">Hi ${data.name}!</h2>
          <p>Thank you for applying for the <strong>${data.role}</strong> position at <strong>Techno Vanam</strong>.</p>
          <p>We've received your application and our team is currently reviewing your profile and portfolio. Finding the right fit is important to us, so we take the time to look through every application carefully.</p>
          
          <div style="background: #f0fdf4; padding: 20px; border-radius: 10px; margin: 25px 0;">
            <p style="margin: 0; color: #166534; font-weight: bold;">Next Steps:</p>
            <ul style="color: #166534; padding-left: 20px;">
              <li>Portfolio & Resume Review</li>
              <li>Initial Screening Call (if shortlisted)</li>
              <li>Technical/Creative Interview</li>
            </ul>
          </div>

          <p>Due to the high volume of applications, we might not be able to respond to everyone personally, but we will definitely get in touch if we'd like to move forward with your candidacy.</p>
          
          <p>Stay creative!</p>
          
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
