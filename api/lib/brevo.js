/**
 * Brevo (formerly Sendinblue) Email Service
 * Handles transactional emails via Brevo API
 */

const BREVO_API_URL = 'https://api.brevo.com/v3';

/**
 * Get Brevo API key from environment variables
 * Supports both with and without VITE_ prefix
 * Reads at runtime to ensure .env is loaded
 */
function getBrevoApiKey() {
  return process.env.BREVO_API_KEY || process.env.VITE_BREVO_API_KEY;
}

/**
 * Send transactional email via Brevo API
 * @param {Object} options - Email options
 * @param {string} options.to - Recipient email
 * @param {string} options.subject - Email subject
 * @param {string} options.htmlContent - HTML email content
 * @param {string} options.textContent - Plain text email content (optional)
 * @param {string} options.fromEmail - Sender email
 * @param {string} options.fromName - Sender name
 * @param {string} options.replyTo - Reply-to email (optional)
 * @returns {Promise<Object>} Brevo API response
 */
async function sendEmail({
  to,
  subject,
  htmlContent,
  textContent,
  fromEmail = 'official@technovanam.in',
  fromName = 'Techno Vanam',
  replyTo,
}) {
  const BREVO_API_KEY = getBrevoApiKey();

  if (!BREVO_API_KEY) {
    throw new Error('BREVO_API_KEY environment variable is not set. Please add BREVO_API_KEY to your .env file.');
  }

  // Clean the API key (remove quotes, whitespace)
  const cleanApiKey = BREVO_API_KEY.trim().replace(/^["']|["']$/g, '');

  // Validate API key format
  if (!cleanApiKey || cleanApiKey.length < 10) {
    throw new Error(`Invalid BREVO_API_KEY format. Key length: ${cleanApiKey.length}. Expected format: xkeysib-... or xsmtpsib-...`);
  }

  // Validate that it starts with correct prefix
  if (!cleanApiKey.startsWith('xkeysib-') && !cleanApiKey.startsWith('xsmtpsib-')) {
    throw new Error(`Invalid BREVO_API_KEY format. Key should start with 'xkeysib-' or 'xsmtpsib-'. Got: ${cleanApiKey.substring(0, 10)}...`);
  }

  // Warn if using SMTP key with REST API (may cause 401 errors)
  if (cleanApiKey.startsWith('xsmtpsib-')) {
    console.warn('⚠️  WARNING: You are using an SMTP key (xsmtpsib-) with the REST API.');
    console.warn('   For REST API (/v3/smtp/email), you need an API key starting with "xkeysib-"');
    console.warn('   Please generate a new API key (not SMTP key) in Brevo dashboard:');
    console.warn('   Settings → SMTP & API → API Keys → Generate a new API key');
  }

  // Log API key info for debugging (first 15 chars only for security)
  console.log('📧 Using Brevo API Key:', cleanApiKey.substring(0, 15) + '... (length: ' + cleanApiKey.length + ')');

  const payload = {
    sender: {
      name: fromName,
      email: fromEmail,
    },
    to: [
      {
        email: to,
      },
    ],
    subject,
    htmlContent,
    ...(textContent && { textContent }),
    ...(replyTo && {
      replyTo: {
        email: replyTo,
      },
    }),
    // Add headers to mark emails as transactional (not promotional)
    // These headers help email clients recognize this as a transactional email
    // Note: We do NOT include List-Unsubscribe headers as those are for marketing emails
    headers: {
      'X-Priority': '1', // High priority
      'X-Mailer': 'Techno Vanam Transactional Email',
      'X-Auto-Response-Suppress': 'All', // Suppress auto-replies
      'X-Entity-Ref-ID': `transactional-${Date.now()}`, // Unique transaction ID
    },
    // Add tags to categorize as transactional (not marketing)
    tags: ['transactional', 'notification', 'auto-reply'],
  };

  const response = await fetch(`${BREVO_API_URL}/smtp/email`, {
    method: 'POST',
    headers: {
      'api-key': cleanApiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const errorMessage = errorData.message || errorData.error || response.statusText;

    // Log detailed error for debugging
    console.error('❌ Brevo API Error Details:');
    console.error('   Status:', response.status);
    console.error('   Message:', errorMessage);
    console.error('   API Key (first 15 chars):', cleanApiKey.substring(0, 15) + '...');
    console.error('   API Key length:', cleanApiKey.length);
    console.error('   API Key format:', cleanApiKey.startsWith('xkeysib-') || cleanApiKey.startsWith('xsmtpsib-') ? '✅ Valid' : '❌ Invalid');
    console.error('   Full error response:', JSON.stringify(errorData, null, 2));

    // Provide helpful error message
    if (response.status === 401) {
      console.error('   💡 Troubleshooting 401 error:');
      if (cleanApiKey.startsWith('xsmtpsib-')) {
        console.error('      ⚠️  You are using an SMTP key (xsmtpsib-) with the REST API!');
        console.error('      → Generate a new API key (xkeysib-) in Brevo dashboard:');
        console.error('         Settings → SMTP & API → API Keys → Generate a new API key');
        console.error('      → Make sure to select "API Keys" (not "SMTP Keys")');
      } else {
        console.error('      1. Verify the API key is correct in your .env file');
        console.error('      2. Check if the API key is expired or revoked in Brevo dashboard');
        console.error('      3. Ensure the API key has "Send emails" permission');
        console.error('      4. Try regenerating the API key in Brevo dashboard');
      }
    }

    throw new Error(
      `Brevo API error: ${response.status} - ${errorMessage}`
    );
  }

  return await response.json();
}

/**
 * Send admin notification email
 * @param {Object} inquiryData - Contact form data
 * @returns {Promise<Object>} Brevo API response
 */
async function sendAdminNotification(inquiryData) {
  const subject = `New Inquiry: ${inquiryData.name} - ${inquiryData.projectType || 'Project'}`;

  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5;">
        <tr>
          <td style="padding: 40px 20px;">
            <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #71d300; overflow: hidden;">
              <tr>
                <td style="padding: 30px; background: linear-gradient(135deg, #71d300 0%, #5fb300 100%);">
                  <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 15px;">
                    New Project Inquiry
                  </h2>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px;">
                  <div style="margin-bottom: 20px;">
                    <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300; min-width: 120px; display: inline-block;">Name:</strong> ${inquiryData.name}</p>
                    <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300; min-width: 120px; display: inline-block;">Email:</strong> <a href="mailto:${inquiryData.email}" style="color: #71d300; text-decoration: none;">${inquiryData.email}</a></p>
                    ${inquiryData.company ? `<p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300; min-width: 120px; display: inline-block;">Company:</strong> ${inquiryData.company}</p>` : ''}
                    ${inquiryData.website ? `<p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300; min-width: 120px; display: inline-block;">Website:</strong> <a href="${inquiryData.website}" target="_blank" style="color: #71d300; text-decoration: none;">${inquiryData.website}</a></p>` : ''}
                    ${inquiryData.projectType ? `<p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300; min-width: 120px; display: inline-block;">Project Type:</strong> ${inquiryData.projectType}</p>` : ''}
                    ${inquiryData.deadline ? `<p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300; min-width: 120px; display: inline-block;">Deadline:</strong> ${inquiryData.deadline}</p>` : ''}
                    ${inquiryData.services ? `<p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300; min-width: 120px; display: inline-block;">Services:</strong> ${Array.isArray(inquiryData.services) ? inquiryData.services.join(', ') : inquiryData.services}</p>` : ''}
                  </div>
                  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; border-left: 4px solid #71d300; margin-top: 20px;">
                    <p style="margin: 0 0 10px 0; color: #333; font-size: 16px; font-weight: 600; color: #71d300;">Message:</p>
                    <p style="margin: 0; color: #555; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${inquiryData.message.replace(/\n/g, '<br>')}</p>
                  </div>
                  <p style="margin: 30px 0 0 0; font-size: 12px; color: #999; text-align: center; padding-top: 20px; border-top: 1px solid #eee;">
                    Submitted on ${new Date().toLocaleString()}<br>
                    <strong>Database ID:</strong> ${inquiryData.id || 'N/A'}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return await sendEmail({
    to: 'official@technovanam.in',
    subject,
    htmlContent,
    fromEmail: 'noreply@technovanam.in',
    fromName: 'Techno Vanam System',
    replyTo: inquiryData.email,
  });
}

/**
 * Send auto-reply email to user
 * @param {Object} inquiryData - Contact form data
 * @returns {Promise<Object>} Brevo API response
 */
async function sendAutoReply(inquiryData) {
  // Use transactional subject line (no emojis, less promotional)
  const subject = "We've received your inquiry - Techno Vanam";

  const htmlContent = getAutoReplyTemplate(inquiryData);

  return await sendEmail({
    to: inquiryData.email,
    subject,
    htmlContent,
    fromEmail: 'noreply@technovanam.in',
    fromName: 'Techno Vanam',
  });
}

/**
 * Get professional auto-reply email template
 * @param {Object} inquiryData - Contact form data
 * @returns {string} HTML email template
 */
function getAutoReplyTemplate(inquiryData) {
  const userName = inquiryData.name || 'there';

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Thank You for Contacting Techno Vanam</title>
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
  <!-- Main Container -->
  <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 40px 20px;">
    <tr>
      <td align="center">
        <!-- Email Content -->
        <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          
          <!-- Header with Logo -->
          <tr>
            <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
              <img src="https://technovanam.in/Logo.png" alt="Techno Vanam" style="max-width: 180px; height: auto; display: block; margin: 0 auto;" />
              <p style="margin: 20px 0 0 0; color: #71d300; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">Designing Digital Future</p>
            </td>
          </tr>

          <!-- Main Content -->
          <tr>
            <td style="padding: 50px 40px;">
              
              <!-- Greeting -->
              <h1 style="margin: 0 0 20px 0; color: #000000; font-size: 28px; font-weight: 600; line-height: 1.3;">
                Hello ${userName}! 👋
              </h1>
              
              <!-- Thank You Message -->
              <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px; line-height: 1.7;">
                Thank you for reaching out to <strong style="color: #000000;">Techno Vanam</strong>. We're excited to learn more about your project and explore how we can bring your vision to life.
              </p>
              
              <p style="margin: 0 0 30px 0; color: #333333; font-size: 16px; line-height: 1.7;">
                This is a quick confirmation to let you know that we've received your inquiry. Our team is currently reviewing your details and will get back to you within <strong style="color: #71d300;">24 business hours</strong> to discuss the next steps.
              </p>

              <!-- What's Next Section -->
              <div style="background-color: #f0fdf4; border-left: 4px solid #71d300; padding: 25px; border-radius: 8px; margin: 30px 0;">
                <h2 style="margin: 0 0 15px 0; color: #166534; font-size: 18px; font-weight: 600;">
                  What's Next?
                </h2>
                <ul style="margin: 0; padding-left: 20px; color: #166534; font-size: 15px; line-height: 1.8;">
                  <li style="margin-bottom: 10px;">Reviewing your project requirements and objectives</li>
                  <li style="margin-bottom: 10px;">Hand-picking the best experts for your specific needs</li>
                  <li style="margin-bottom: 10px;">Scheduling a discovery call to understand your vision</li>
                  <li>Preparing a tailored proposal for your project</li>
                </ul>
              </div>

              <!-- CTA Button -->
              <table role="presentation" style="width: 100%; margin: 35px 0;">
                <tr>
                  <td align="center">
                    <a href="https://technovanam.in" style="display: inline-block; padding: 16px 40px; background-color: #71d300; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px; box-shadow: 0 4px 12px rgba(113, 211, 0, 0.3); transition: all 0.3s ease;">
                      Visit Our Website
                    </a>
                  </td>
                </tr>
              </table>

              <!-- Additional Links -->
              <p style="margin: 30px 0 0 0; color: #666666; font-size: 14px; text-align: center; line-height: 1.8;">
                In the meantime, feel free to explore our <a href="https://technovanam.in/services" style="color: #71d300; text-decoration: none; font-weight: 500;">latest work</a> or connect with us on <a href="https://instagram.com/technovanam.in" style="color: #71d300; text-decoration: none; font-weight: 500;">Instagram</a>.
              </p>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 30px 40px; border-top: 1px solid #e5e7eb;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="text-align: center;">
                    <p style="margin: 0 0 10px 0; color: #000000; font-size: 16px; font-weight: 600;">
                      Techno Vanam
                    </p>
                    <p style="margin: 0 0 15px 0; color: #6b7280; font-size: 14px; line-height: 1.6;">
                      Designing Digital Future<br>
                      Premium UI/UX Design & Development Studio
                    </p>
                    <p style="margin: 0 0 20px 0;">
                      <a href="https://technovanam.in" style="color: #71d300; text-decoration: none; font-size: 14px; font-weight: 500;">technovanam.in</a>
                    </p>
                    <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
                      <p style="margin: 0; color: #9ca3af; font-size: 12px; line-height: 1.6;">
                        This is an automated confirmation email. Please do not reply to this message.<br>
                        If you have any questions, please contact us at <a href="mailto:official@technovanam.in" style="color: #71d300; text-decoration: none;">official@technovanam.in</a>
                      </p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
        
        <!-- Bottom Spacing -->
        <table role="presentation" style="width: 100%; margin-top: 20px;">
          <tr>
            <td style="text-align: center; padding: 20px;">
              <p style="margin: 0; color: #9ca3af; font-size: 12px;">
                © ${new Date().getFullYear()} Techno Vanam. All rights reserved.
              </p>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </table>
</body>
</html>
  `;
}

/**
 * Send newsletter subscription emails
 * @param {Object} subscriptionData - Newsletter subscription data
 * @returns {Promise<Object>} Brevo API response
 */
async function sendNewsletterEmails(subscriptionData) {
  const { email, isNew, id } = subscriptionData;

  // Admin notification
  const adminSubject = "New Newsletter Subscription";
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; border: 1px solid #71d300; overflow: hidden;">
              <tr>
                <td style="padding: 30px;">
                  <h2 style="margin: 0 0 20px 0; color: #71d300; font-size: 24px; font-weight: 600; border-bottom: 2px solid #71d300; padding-bottom: 15px;">New Subscriber Alert</h2>
                  <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Email:</strong> ${email}</p>
                  <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Source:</strong> Website Footer</p>
                  <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Timestamp:</strong> ${new Date().toLocaleString()}</p>
                  <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Database ID:</strong> ${id}</p>
                  <p style="margin: 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Status:</strong> ${isNew ? 'New Subscription' : 'Already Subscribed'}</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // Welcome email
  // Use transactional subject line (no emojis, less promotional)
  const welcomeSubject = "Subscription Confirmed - Techno Vanam";
  const welcomeHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <tr>
                <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                  <img src="https://technovanam.in/Logo.png" alt="Techno Vanam" style="max-width: 180px; height: auto; display: block; margin: 0 auto;" />
                  <h1 style="margin: 20px 0 0 0; color: #71d300; font-size: 24px; font-weight: 600; letter-spacing: 2px;">✨ WELCOME TO TECHNO VANAM ✨</h1>
                </td>
              </tr>
              <tr>
                <td style="padding: 50px 40px;">
                  <p style="margin: 0 0 20px 0; color: #333; font-size: 16px;">Hi there!</p>
                  <p style="margin: 0 0 20px 0; color: #333; font-size: 16px;">We're thrilled to have you join our exclusive circle of digital innovators! You've just taken the first step towards staying ahead in the rapidly evolving digital landscape.</p>
                  <div style="border-top: 2px solid #71d300; margin: 30px 0; padding-top: 20px;">
                    <h2 style="margin: 0 0 20px 0; color: #71d300; font-size: 18px; text-transform: uppercase;">🚀 What to Expect:</h2>
                    <ul style="list-style: none; padding-left: 0; margin: 0;">
                      <li style="margin-bottom: 15px; color: #333; font-size: 15px;">
                        <span style="color: #71d300; font-weight: bold; margin-right: 10px;">🔹</span>
                        <strong>STUNNING DESIGN:</strong> Get insights into modern UI/UX trends.
                      </li>
                      <li style="margin-bottom: 15px; color: #333; font-size: 15px;">
                        <span style="color: #71d300; font-weight: bold; margin-right: 10px;">🔹</span>
                        <strong>CUTTING-EDGE TECH:</strong> Stay updated with the latest in Web & Mobile development.
                      </li>
                      <li style="margin-bottom: 15px; color: #333; font-size: 15px;">
                        <span style="color: #71d300; font-weight: bold; margin-right: 10px;">🔹</span>
                        <strong>INDUSTRY INSIGHTS:</strong> Deep dives into how we solve complex business challenges.
                      </li>
                      <li style="margin-bottom: 15px; color: #333; font-size: 15px;">
                        <span style="color: #71d300; font-weight: bold; margin-right: 10px;">🔹</span>
                        <strong>EARLY ACCESS:</strong> Be the first to know about our new product launches.
                      </li>
                    </ul>
                  </div>
                  <div style="text-align: center; margin-top: 30px;">
                    <a href="https://technovanam.in/services" style="display: inline-block; padding: 12px 24px; background-color: #71d300; color: #ffffff; text-decoration: none; border-radius: 8px; font-weight: 600; font-size: 16px;">🌐 Explore Our Work</a>
                  </div>
                  <div style="margin-top: 40px; font-size: 14px; text-align: center; color: #777;">
                    <p style="margin: 0;">Let's design the digital future together.</p>
                    <p style="margin: 10px 0 0 0;"><strong>The Techno Vanam Team</strong></p>
                  </div>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // Always send both emails:
  // 1. Admin notification (to company)
  // 2. Welcome/confirmation email (to subscriber - THIS IS THE REPLY MAIL)
  console.log('📧 Sending newsletter emails...');
  console.log('   Admin notification → official@technovanam.in');
  console.log('   Welcome email (reply) →', email);

  // Send emails independently so one failure doesn't stop the other
  const adminEmailPromise = sendEmail({
    to: 'official@technovanam.in',
    subject: adminSubject,
    htmlContent: adminHtml,
    fromEmail: 'noreply@technovanam.in',
    fromName: 'Techno Vanam System',
  })
    .then(result => {
      console.log('✅ Newsletter admin notification sent successfully');
      return { success: true, type: 'admin', result };
    })
    .catch(err => {
      console.error('❌ Failed to send admin notification:', err.message);
      return { success: false, type: 'admin', error: err.message };
    });

  const welcomeEmailPromise = sendEmail({
    to: email,
    subject: welcomeSubject,
    htmlContent: welcomeHtml,
    fromEmail: 'noreply@technovanam.in',
    fromName: 'Techno Vanam',
  })
    .then(result => {
      console.log('✅ Newsletter welcome email (reply) sent successfully to:', email);
      return { success: true, type: 'welcome', result };
    })
    .catch(err => {
      console.error('❌ Failed to send welcome email (reply):', err.message);
      console.error('   This is the confirmation email that should be sent to the subscriber!');
      return { success: false, type: 'welcome', error: err.message };
    });

  // Wait for both emails to complete (even if one fails)
  const results = await Promise.all([adminEmailPromise, welcomeEmailPromise]);

  // Log summary
  const adminSuccess = results[0].success;
  const welcomeSuccess = results[1].success;

  console.log('📧 Newsletter email summary:');
  console.log('   Admin notification:', adminSuccess ? '✅ Sent' : '❌ Failed');
  console.log('   Welcome email (reply):', welcomeSuccess ? '✅ Sent' : '❌ Failed');

  if (!welcomeSuccess) {
    console.error('⚠️  WARNING: Welcome/reply email was NOT sent to subscriber!');
    console.error('   This means the subscriber will not receive a confirmation email.');
  }

  return results;
}

/**
 * Send job application emails
 * @param {Object} applicationData - Job application data
 * @returns {Promise<Object>} Brevo API response
 */
async function sendApplicationEmails(applicationData) {
  const { name, email, role, type, phone, portfolio, resume_link, note, id } = applicationData;

  // Admin notification
  const adminSubject = `Job Application: ${name} - ${role}`;
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; border: 1px solid #71d300; overflow: hidden;">
              <tr>
                <td style="background: linear-gradient(135deg, #71d300 0%, #5fb300 100%); padding: 30px;">
                  <h2 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600; border-bottom: 2px solid rgba(255,255,255,0.3); padding-bottom: 15px;">New Job Application</h2>
                </td>
              </tr>
              <tr>
                <td style="padding: 30px;">
                  <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Applying for:</strong> ${role} ${type ? `(${type})` : ''}</p>
                  <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Candidate Name:</strong> ${name}</p>
                  <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Email:</strong> <a href="mailto:${email}" style="color: #71d300;">${email}</a></p>
                  <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Phone:</strong> ${phone}</p>
                  ${portfolio ? `<p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Portfolio:</strong> <a href="${portfolio}" target="_blank" style="color: #71d300;">${portfolio}</a></p>` : ''}
                  <p style="margin: 0 0 10px 0; color: #333; font-size: 16px;"><strong style="color: #71d300;">Resume Link:</strong> <a href="${resume_link}" target="_blank" style="color: #71d300;">${resume_link}</a></p>
                  ${note ? `<div style="background: #f9f9f9; padding: 15px; border-radius: 8px; border-left: 4px solid #71d300; margin-top: 15px;"><p style="margin: 0; color: #333; font-size: 15px; line-height: 1.6;">${note.replace(/\n/g, '<br>')}</p></div>` : ''}
                  <p style="margin: 30px 0 0 0; font-size: 12px; color: #999; text-align: center; padding-top: 20px; border-top: 1px solid #eee;">
                    Submitted on ${new Date().toLocaleString()}<br>
                    <strong>Database ID:</strong> ${id}
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  // Candidate confirmation
  const candidateSubject = `Application Received: ${role} ✨ Techno Vanam`;
  const candidateHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f5f5f5; line-height: 1.6;">
      <table role="presentation" style="width: 100%; border-collapse: collapse; background-color: #f5f5f5; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table role="presentation" style="max-width: 600px; width: 100%; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <tr>
                <td style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); padding: 40px 30px; text-align: center;">
                  <img src="https://technovanam.in/Logo.png" alt="Techno Vanam" style="max-width: 180px; height: auto; display: block; margin: 0 auto;" />
                </td>
              </tr>
              <tr>
                <td style="padding: 50px 40px;">
                  <h2 style="margin: 0 0 20px 0; color: #71d300; font-size: 24px; font-weight: 600; text-align: center;">Hi ${name}!</h2>
                  <p style="margin: 0 0 20px 0; color: #333; font-size: 16px;">Thank you for applying for the <strong>${role}</strong> position at <strong>Techno Vanam</strong>.</p>
                  <p style="margin: 0 0 30px 0; color: #333; font-size: 16px;">We've received your application and our team is currently reviewing your profile and portfolio. Finding the right fit is important to us, so we take the time to look through every application carefully.</p>
                  <div style="background-color: #f0fdf4; border-left: 4px solid #71d300; padding: 25px; border-radius: 8px; margin: 30px 0;">
                    <h3 style="margin: 0 0 15px 0; color: #166534; font-size: 18px; font-weight: 600;">Next Steps:</h3>
                    <ul style="margin: 0; padding-left: 20px; color: #166534; font-size: 15px; line-height: 1.8;">
                      <li style="margin-bottom: 10px;">Portfolio & Resume Review</li>
                      <li style="margin-bottom: 10px;">Initial Screening Call (if shortlisted)</li>
                      <li>Technical/Creative Interview</li>
                    </ul>
                  </div>
                  <p style="margin: 30px 0 0 0; color: #333; font-size: 16px;">Due to the high volume of applications, we might not be able to respond to everyone personally, but we will definitely get in touch if we'd like to move forward with your candidacy.</p>
                  <p style="margin: 20px 0 0 0; color: #333; font-size: 16px;">Stay creative!</p>
                </td>
              </tr>
              <tr>
                <td style="background-color: #f9fafb; padding: 30px 40px; border-top: 1px solid #e5e7eb; text-align: center;">
                  <p style="margin: 0; color: #6b7280; font-size: 14px;">Techno Vanam — Designing Digital Future</p>
                  <p style="margin: 10px 0 0 0;"><a href="https://technovanam.in" style="color: #71d300; text-decoration: none; font-weight: 500;">technovanam.in</a></p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;

  return Promise.all([
    sendEmail({
      to: 'official@technovanam.in',
      subject: adminSubject,
      htmlContent: adminHtml,
      fromEmail: 'noreply@technovanam.in',
      fromName: 'Techno Vanam Careers',
      replyTo: email,
    }),
    sendEmail({
      to: email,
      subject: candidateSubject,
      htmlContent: candidateHtml,
      fromEmail: 'official@technovanam.in',
      fromName: 'Techno Vanam',
    }),
  ]);
}

export {
  sendEmail,
  sendAdminNotification,
  sendAutoReply,
  getAutoReplyTemplate,
  sendNewsletterEmails,
  sendApplicationEmails,
};

