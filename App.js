// app.js
const express = require('express');
const app = express();
const PORT = 3000;


// Route to serve the index.html file
app.get('', (req, res) => {
  res.sendFile(__dirname +"/Index.html");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
