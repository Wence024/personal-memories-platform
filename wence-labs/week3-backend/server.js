// Part A: Setup - Import Express and initialize the app
const express = require('express');
const app = express();
const PORT = 3000;

// --- Middleware ---
// Part C: Serve Static Files - Use express.static() to serve files from the 'public' directory
// This middleware should come before all your API routes.
// It tells Express to look in the 'public' folder for any static files (like .html, .css, .js).
// When you navigate to http://localhost:3000/, it will automatically find and serve 'index.html'.
app.use(express.static('public'));

// Part B (for POST): To handle JSON data sent in a request body, you need this middleware.
// It parses incoming requests with JSON payloads.
app.use(express.json());


// --- Routes ---
// Part B, Route 1: GET / – Sends a welcome message.
// Note: Because express.static is serving index.html at the root '/', this route will not be hit
// when you visit http://localhost:3000/ in a browser. It is included here to fulfill the
// lab requirements and can be tested with tools like Postman by directly requesting it.
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