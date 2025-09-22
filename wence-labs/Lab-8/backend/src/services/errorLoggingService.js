const fs = require('fs');

/**
 * Logs errors to a file for future debugging and tracking.
 * 
 * @param {Error} error - The error object to be logged, typically containing a stack trace or message.
 * 
 * @returns {void} Writes error details to the `error.log` file.
 */
function logErrorToFile(error) {
  const errorDetails = `[${new Date().toISOString()}] - Error: ${error.stack || error.message}\n\n`;
  fs.appendFileSync('error.log', errorDetails);
}

module.exports = { logErrorToFile };
