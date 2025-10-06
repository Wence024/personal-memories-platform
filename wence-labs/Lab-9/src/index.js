/**
 * @file The main entry point for the application.
 * @module index
 */

const app = require('./app');
const port = 3000;

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
