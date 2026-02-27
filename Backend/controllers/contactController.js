import { sendEmail } from '../services/emailService.js';
// import { saveContactToDatabase } from '../services/databaseService.js';

/**
 * Send contact form email
 * @route POST /api/contact
 */
export const sendContactEmail = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    // Prepare email content
    const emailData = {
      from: email,
      name: name,
      message: message,
      timestamp: new Date().toISOString(),
      ip: req.ip || req.connection.remoteAddress
    };

    // Send email
    const emailResult = await sendEmail(emailData);

    // Optional: Save to database (uncomment if you have a database)
    // await saveContactToDatabase(emailData);

    // Log the contact submission
    console.log(`📧 Contact form submission from: ${name} (${email})`);

    // Send success response
    res.status(200).json({
      status: 'success',
      message: 'Your message has been sent successfully! I\'ll get back to you soon.',
      data: {
        messageId: emailResult.messageId,
        timestamp: emailData.timestamp
      }
    });

  } catch (error) {
    console.error('❌ Error sending contact email:', error);
    
    // Pass error to error handler middleware
    next({
      status: 500,
      message: 'Failed to send message. Please try again later.',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
};

/**
 * Get contact form submissions (Admin only - optional)
 * @route GET /api/contact/submissions
 */
export const getContactSubmissions = async (req, res, next) => {
  try {
    // This would fetch from your database
    // const submissions = await getSubmissionsFromDatabase();
    
    res.status(200).json({
      status: 'success',
      message: 'Feature not implemented yet',
      data: []
    });
  } catch (error) {
    next(error);
  }
};
