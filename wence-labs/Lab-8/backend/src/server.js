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

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
