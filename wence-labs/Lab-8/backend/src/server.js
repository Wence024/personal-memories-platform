const express = require('express');
const { validateUser } = require('./validation');  // Import validation logic

const app = express();
app.use(express.json());

// Sample route to validate user data
app.post('/user', (req, res) => {
  const errors = validateUser(req.body);

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  res.status(200).json({ message: 'User data is valid!' });
});

// Create Registration Endpoint
app.post('/register', (req, res) => {
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
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
