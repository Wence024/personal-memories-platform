const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

// --- Step 4: Validation functions ---

// Check if string contains only alphabetic characters (A-Z, a-z)
function isAlphabetic(str) {
  return /^[A-Za-z]+$/.test(str);
}

// Simple email validation regex
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Validate the entire user data and return array of error messages (empty if valid)
function validateUser(data) {
  const errors = [];

  if (!data.name || !isAlphabetic(data.name)) {
    errors.push('Name must be alphabetic.');
  }

  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Email must be valid.');
  }

  if (!data.password || data.password.length < 8) {
    errors.push('Password must be at least 8 characters.');
  }

  if (
    data.age === undefined ||
    typeof data.age !== 'number' ||
    data.age < 18 ||
    data.age > 65
  ) {
    errors.push('Age must be a number between 18 and 65.');
  }

  return errors;
}

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
