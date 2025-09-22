const { validateUser } = require('../validation/validation');
const { logErrorToFile } = require('../services/errorLoggingService');

async function registerUser(req, res) {
  try {
    const userData = req.body;

    const errors = validateUser(userData);

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    logErrorToFile(error);
    res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
  }
}

module.exports = { registerUser };
