const express = require('express');
const cors = require('cors');
const path = require('path');
const api = require('./routes/api/index');
const app = express();
const mongoose = require('mongoose');
const Keys = require('../Keys');

mongoose.connect(Keys.URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

// Serve the static files from the Gatsby app
app.use(cors) ;
app.use(express.static(path.join(__dirname, 'client/public/')));

// An api endpoint that returns a short list of items
app.use('/api', api);

const port = process.env.PORT || 5000;

app.listen(port);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client/public/404.html'));
});

console.log('App is listening on port ' + port);
