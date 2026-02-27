/**
 * Global error handling middleware
 */
export const errorHandler = (err, req, res, next) => {
  // Log error
  console.error('❌ Error:', {
    message: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined,
    url: req.originalUrl,
    method: req.method,
    ip: req.ip
  });

  // Default error
  const status = err.status || err.statusCode || 500;
  const message = err.message || 'Internal server error';

  // Send error response
  res.status(status).json({
    status: 'error',
    message: message,
    ...(process.env.NODE_ENV === 'development' && {
      error: err.error,
      stack: err.stack
    })
  });
};
