import rateLimit from 'express-rate-limit';

/**
 * Rate limiter for contact form submissions
 * Prevents spam and abuse
 */
export const rateLimiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000, // 15 minutes
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 5, // 5 requests per window
  message: {
    status: 'error',
    message: 'Too many requests from this IP. Please try again later.',
    retryAfter: '15 minutes'
  },
  standardHeaders: true, // Return rate limit info in headers
  legacyHeaders: false,
  // Skip rate limiting for certain IPs (optional)
  skip: (req) => {
    // Example: Skip rate limiting for localhost in development
    if (process.env.NODE_ENV === 'development' && req.ip === '::1') {
      return true;
    }
    return false;
  },
  // Custom handler for rate limit exceeded
  handler: (req, res) => {
    console.log(`⚠️ Rate limit exceeded for IP: ${req.ip}`);
    res.status(429).json({
      status: 'error',
      message: 'Too many contact form submissions. Please try again in 15 minutes.',
      retryAfter: '15 minutes'
    });
  }
});
