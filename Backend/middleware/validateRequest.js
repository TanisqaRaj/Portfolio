import { validationResult } from 'express-validator';

/**
 * Middleware to validate request using express-validator
 */
export const validateRequest = (req, res, next) => {
  const errors = validationResult(req);
  
  if (!errors.isEmpty()) {
    // Format errors for better readability
    const formattedErrors = errors.array().map(error => ({
      field: error.path || error.param,
      message: error.msg,
      value: error.value
    }));

    console.log('⚠️ Validation errors:', formattedErrors);

    return res.status(400).json({
      status: 'error',
      message: 'Validation failed',
      errors: formattedErrors
    });
  }

  next();
};
