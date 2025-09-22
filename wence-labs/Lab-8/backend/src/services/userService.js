let users = [];  // In-memory storage for users

// Add a new user to the users array
function addUser(userData) {
  users.push(userData);
}

// Get all users (for testing or retrieval purposes)
function getUsers() {
  return users;
}

module.exports = { addUser, getUsers };
