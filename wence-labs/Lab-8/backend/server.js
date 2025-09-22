// Import Express and required modules
const express = require('express');
const fs = require('fs'); // For logging errors

// Initialize Express app
const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());

// Server will listen on port 3000
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
