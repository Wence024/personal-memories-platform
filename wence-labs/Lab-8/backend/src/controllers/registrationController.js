const { validateUser } = require('../validation/validation');
const { logErrorToFile } = require('../services/errorLoggingService');
const { addUser } = require('../services/userService');

/**
 * Registers a user by validating the provided data and storing it if valid.
 * 
 * @param {Object} req - The request object, which contains user data in the body.
 * @param {Object} res - The response object used to send a response back to the client.
 * 
 * @returns {void} Sends a JSON response indicating whether registration was successful or an error occurred.
 */
async function registerUser(req, res) {
  try {
    const userData = req.body;

    const errors = validateUser(userData);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Store the valid user data
    addUser(userData);

    res.status(201).json({
      message: 'User registered successfully!',
      user: userData,  // Optionally, return the stored data
    });
  } catch (error) {
    logErrorToFile(error);
    res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
  }
}

module.exports = { registerUser };
