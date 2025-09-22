const { validateUser } = require('../validation/validation');
const { logErrorToFile } = require('../services/errorLoggingService');

/**
 * Validates user data based on predefined validation rules.
 * 
 * @param {Object} req - The request object, containing user data in the body.
 * @param {Object} res - The response object to send back validation results.
 * 
 * @returns {void} Sends a JSON response indicating whether the user data is valid or contains errors.
 */
async function validateUserData(req, res) {
  try {
    const errors = validateUser(req.body);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    res.status(200).json({ message: 'User data is valid!' });
  } catch (error) {
    logErrorToFile(error);
    res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
  }
}

module.exports = { validateUserData };
