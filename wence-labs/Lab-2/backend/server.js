// @ts-check
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files from frontend/public
app.use(express.static(path.join(__dirname, '../frontend/public')));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
