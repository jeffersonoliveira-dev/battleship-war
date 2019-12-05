var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  console.log('you requested this api');
});

router.post('/', (req, res) => {
  console.log('you requested this api, post');
  // connect with mongoose
  res.send(true)
});

module.exports = router;
