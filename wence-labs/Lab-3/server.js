// Part A: Setup - Import Express and initialize the app
const express = require('express');
const app = express();
const PORT = 3000;

// --- Server Listener ---
// Starts the server and makes it listen for requests on the specified PORT
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});