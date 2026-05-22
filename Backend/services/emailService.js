import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (emailData) => {
  const { error } = await resend.emails.send({
    from: 'Portfolio Contact <onboarding@resend.dev>',
    to: process.env.EMAIL_TO,
    replyTo: emailData.from,
    subject: `📬 New Contact Form Submission from ${emailData.name}`,
    html: `
      <p><strong>Name:</strong> ${emailData.name}</p>
      <p><strong>Email:</strong> <a href="mailto:${emailData.from}">${emailData.from}</a></p>
      <p><strong>Time:</strong> ${new Date(emailData.timestamp).toLocaleString()}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${emailData.message}</p>
    `
  });

  if (error) throw new Error('Failed to send email: ' + error.message);

  // Auto-reply
  await resend.emails.send({
    from: 'Tanisqa Raj <onboarding@resend.dev>',
    to: emailData.from,
    subject: '✅ Thanks for reaching out!',
    html: `
      <p>Hi ${emailData.name},</p>
      <p>Thank you for reaching out! I've received your message and will get back to you within 24-48 hours.</p>
      <p>Best regards,<br><strong>Tanisqa Raj</strong></p>
    `
  });
};

export const verifyEmailConfig = async () => {
  if (!process.env.RESEND_API_KEY) {
    console.error('❌ RESEND_API_KEY not set');
    return false;
  }
  console.log('✅ Email service is ready');
  return true;
};
