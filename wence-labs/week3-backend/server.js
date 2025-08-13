// Part A: Setup - Import Express and initialize the app
const express = require('express');
const app = express();
const PORT = 3000;

// Part B (for POST): To handle JSON data sent in a request body, you need this middleware.
// It parses incoming requests with JSON payloads.
app.use(express.json());


// --- Routes ---
// Part B, Route 1: GET / – Sends a welcome message.
app.get('/', (req, res) => {
  res.send('Welcome message from the server.js file!');
});


// Part B, Route 2: GET /api/info – Sends a JSON response
app.get('/api/info', (req, res) => {
  const info = {
    course: "IPT2",
    week: 3,
    topic: "Backend Integration"
  };
  res.json(info); // res.json() automatically sets the Content-Type to application/json
});


// Part B, Route 3: POST /api/echo – Returns the JSON sent by the client
app.post('/api/echo', (req, res) => {
  // req.body contains the parsed JSON from the request.
  // We simply send it back as the response.
  res.json(req.body);
});


// --- Server Listener ---
// Starts the server and makes it listen for requests on the specified PORT
app.listen(PORT, () => {
  console.log(`Server is running and listening on http://localhost:${PORT}`);
});