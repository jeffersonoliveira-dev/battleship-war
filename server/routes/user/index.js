const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('you requested this api');
});

router.post('/', (req, res) => {
  console.log('you requested this api, user');
  res.send(true)
});

module.exports = router;
