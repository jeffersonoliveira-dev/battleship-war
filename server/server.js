const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the Gatsby app
app.use(express.static(path.join(__dirname, 'client/public/')));

// An api endpoint that returns a short list of items
app.get('/api/*', (req, res) => {
  console.log('you requested this API');
  // path here
});

const port = process.env.PORT || 5000;
app.listen(port);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/404.html'));
});

console.log('App is listening on port ' + port);
