const express = require('express');
const { validateUserData } = require('./controllers/userController');
const { registerUser } = require('./controllers/registrationController');
const { getUsers } = require('./services/userService');

const app = express();
app.use(express.json());

/**
 * POST /user
 * Endpoint to validate user data.
 * 
 * @param {Object} req - The request object containing user data.
 * @param {Object} res - The response object.
 * 
 * @returns {void} Sends a JSON response indicating if the user data is valid or contains errors.
 */
app.post('/user', validateUserData);

/**
 * POST /register
 * Endpoint to register a user by validating and storing their data.
 * 
 * @param {Object} req - The request object containing user data.
 * @param {Object} res - The response object.
 * 
 * @returns {void} Sends a JSON response indicating the success or failure of the registration process.
 */
app.post('/register', registerUser);

/**
 * GET /users
 * Endpoint to retrieve all registered users.
 * 
 * @param {Object} req - The request object.
 * @param {Object} res - The response object containing the list of users.
 * 
 * @returns {void} Sends a JSON response with the list of all registered users.
 */
app.get('/users', (req, res) => {
  res.status(200).json(getUsers());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
