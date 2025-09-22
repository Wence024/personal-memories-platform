const fs = require('fs');

// Log errors to a file
function logErrorToFile(error) {
  const errorDetails = `[${new Date().toISOString()}] - Error: ${error.stack || error.message}\n\n`;
  fs.appendFileSync('error.log', errorDetails);
}

module.exports = { logErrorToFile };
