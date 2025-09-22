/**
 * Checks if a string contains only alphabetic characters (A-Z, a-z).
 * Allows spaces in names.
 * 
 * @param {string} str - The string to be validated.
 * 
 * @returns {boolean} Returns true if the string is alphabetic, false otherwise.
 */
function isAlphabetic(str) {
  return /^[A-Za-z\s]+$/.test(str);  // Allow spaces in names
}

/**
 * Validates the provided email format.
 * 
 * @param {string} email - The email string to be validated.
 * 
 * @returns {boolean} Returns true if the email is valid, false otherwise.
 */
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validates the entire user data, returning an array of error messages.
 * 
 * @param {Object} data - The user data to be validated.
 * @param {string} data.name - The user's name.
 * @param {string} data.email - The user's email.
 * @param {string} data.password - The user's password.
 * @param {number} data.age - The user's age.
 * 
 * @returns {Array<string>} An array of error messages (empty if valid). 
 * - "Name must be alphabetic."
 * - "Email must be valid."
 * - "Password must be at least 8 characters."
 * - "Age must be a number between 18 and 65."
 */
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

module.exports = { validateUser };
