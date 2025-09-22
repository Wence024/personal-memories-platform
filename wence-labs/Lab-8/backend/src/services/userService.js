let users = [];  // In-memory storage for users

/**
 * Adds a new user to the in-memory users array.
 * 
 * @param {Object} userData - The user data to be added. Contains name, email, password, and age.
 * 
 * @returns {void} Adds the provided user data to the `users` array.
 */
function addUser(userData) {
  users.push(userData);
}

/**
 * Retrieves all stored users.
 * 
 * @returns {Array<Object>} An array of all registered users. Each user object contains name, email, password, and age.
 */
function getUsers() {
  return users;
}

module.exports = { addUser, getUsers };
