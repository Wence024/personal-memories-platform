const express = require('express');
const { validateUserData } = require('./controllers/userController');
const { registerUser } = require('./controllers/registrationController');
const { getUsers } = require('./services/userService');

const app = express();
app.use(express.json());

app.post('/user', validateUserData);
app.post('/register', registerUser);

// Added for testing purposes
app.get('/users', (req, res) => {
  res.status(200).json(getUsers());
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
