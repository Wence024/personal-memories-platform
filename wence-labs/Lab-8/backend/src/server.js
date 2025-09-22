const express = require('express');
const fs = require('fs');
const { validateUser } = require('./validation');

const app = express();
app.use(express.json());

// Log errors to a file
function logErrorToFile(error) {
  const errorDetails = `[${new Date().toISOString()}] - Error: ${error.stack || error.message}\n\n`;
  fs.appendFileSync('error.log', errorDetails);
}

// Sample route to validate user data
app.post('/user', async (req, res) => {
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
});

// Create Registration Endpoint
app.post('/register', async (req, res) => {
  try {
    // Extract user data from request body
    const userData = req.body;

    // Validate user data using the validateUser function
    const errors = validateUser(userData);

    // If there are validation errors, return 400 with detailed error messages
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    // If validation passes, return a success message
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (error) {
    logErrorToFile(error);
    res.status(500).json({ message: 'An unexpected error occurred. Please try again later.' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
