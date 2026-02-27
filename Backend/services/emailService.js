import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

/**
 * Create email transporter based on configuration
 */
const createTransporter = () => {
  // Gmail configuration
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      },
      tls: {
        rejectUnauthorized: false
      }
    });
  }

  // SendGrid configuration
  if (process.env.SENDGRID_API_KEY) {
    return nodemailer.createTransport({
      host: 'smtp.sendgrid.net',
      port: 587,
      auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
      }
    });
  }

  // Custom SMTP configuration
  if (process.env.SMTP_HOST) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      }
    });
  }

  throw new Error('No email service configured. Please check your .env file.');
};

/**
 * Send contact form email
 * @param {Object} emailData - Contact form data
 */
export const sendEmail = async (emailData) => {
  try {
    const transporter = createTransporter();

    // Email to you (portfolio owner)
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: emailData.from,
      subject: `📬 New Contact Form Submission from ${emailData.name}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #FF8C00 0%, #FF4500 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .info-row {
              margin: 15px 0;
              padding: 10px;
              background: white;
              border-left: 4px solid #FF8C00;
              border-radius: 5px;
            }
            .label {
              font-weight: bold;
              color: #FF8C00;
              display: inline-block;
              width: 100px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 5px;
              margin-top: 20px;
              border: 1px solid #ddd;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding: 20px;
              color: #666;
              font-size: 12px;
            }
            .emoji {
              font-size: 24px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="emoji">📬</div>
            <h2>New Contact Form Submission</h2>
          </div>
          
          <div class="content">
            <div class="info-row">
              <span class="label">👤 Name:</span>
              <span>${emailData.name}</span>
            </div>
            
            <div class="info-row">
              <span class="label">📧 Email:</span>
              <span><a href="mailto:${emailData.from}">${emailData.from}</a></span>
            </div>
            
            <div class="info-row">
              <span class="label">🕐 Time:</span>
              <span>${new Date(emailData.timestamp).toLocaleString()}</span>
            </div>
            
            <div class="info-row">
              <span class="label">🌐 IP:</span>
              <span>${emailData.ip}</span>
            </div>
            
            <div class="message-box">
              <h3 style="color: #FF8C00; margin-top: 0;">💬 Message:</h3>
              <p style="white-space: pre-wrap;">${emailData.message}</p>
            </div>
          </div>
          
          <div class="footer">
            <p>This email was sent from your portfolio contact form</p>
            <p>Reply directly to this email to respond to ${emailData.name}</p>
          </div>
        </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${emailData.name}
Email: ${emailData.from}
Time: ${new Date(emailData.timestamp).toLocaleString()}
IP: ${emailData.ip}

Message:
${emailData.message}

---
Reply to this email to respond to ${emailData.name}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);

    console.log('✅ Email sent successfully:', info.messageId);

    // Optional: Send auto-reply to the sender
    await sendAutoReply(transporter, emailData);

    return info;

  } catch (error) {
    console.error('❌ Error sending email:', error);
    throw new Error('Failed to send email: ' + error.message);
  }
};

/**
 * Send auto-reply to the contact form submitter
 */
const sendAutoReply = async (transporter, emailData) => {
  try {
    const autoReplyOptions = {
      from: `"Tanisqa Raj" <${process.env.EMAIL_USER}>`,
      to: emailData.from,
      subject: '✅ Thanks for reaching out!',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #4169E1 0%, #9370DB 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .emoji {
              font-size: 48px;
              margin-bottom: 10px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <div class="emoji">🎉</div>
            <h2>Message Received!</h2>
          </div>
          
          <div class="content">
            <p>Hi ${emailData.name},</p>
            
            <p>Thank you for reaching out! I've received your message and I'm excited to connect with you.</p>
            
            <p>I'll review your message and get back to you as soon as possible, usually within 24-48 hours.</p>
            
            <p>In the meantime, feel free to check out my other projects or connect with me on social media!</p>
            
            <p>Best regards,<br>
            <strong>Tanisqa Raj</strong><br>
            Full Stack Developer</p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            
            <p style="font-size: 12px; color: #666;">
              This is an automated response. Please do not reply to this email.
            </p>
          </div>
        </body>
        </html>
      `,
      text: `
Hi ${emailData.name},

Thank you for reaching out! I've received your message and I'm excited to connect with you.

I'll review your message and get back to you as soon as possible, usually within 24-48 hours.

Best regards,
Tanisqa Raj
Full Stack Developer

---
This is an automated response. Please do not reply to this email.
      `
    };

    await transporter.sendMail(autoReplyOptions);
    console.log('✅ Auto-reply sent to:', emailData.from);

  } catch (error) {
    console.error('⚠️ Failed to send auto-reply:', error.message);
    // Don't throw error - auto-reply is optional
  }
};

/**
 * Verify email configuration
 */
export const verifyEmailConfig = async () => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    console.log('✅ Email service is ready');
    return true;
  } catch (error) {
    console.error('❌ Email service verification failed:', error.message);
    return false;
  }
};
