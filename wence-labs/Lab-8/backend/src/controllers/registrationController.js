const { validateUser } = require('../validation/validation');
const { logErrorToFile } = require('../services/errorLoggingService');

// In-memory storage for user data
let users = [];  // This is a simple array, in production, you would use a database.

async function registerUser(req, res) {
  try {
    const userData = req.body;

    const errors = validateUser(userData);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // Store validated user data in memory (in a real app, this would be in a database)
    users.push(userData);

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
