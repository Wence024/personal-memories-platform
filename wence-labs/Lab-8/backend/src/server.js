const express = require('express');
const { validateUserData } = require('./controllers/userController');
const { registerUser } = require('./controllers/registrationController');

const app = express();
app.use(express.json());

// Sample route to validate user data
app.post('/user', validateUserData);

// Create Registration Endpoint
app.post('/register', registerUser);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
