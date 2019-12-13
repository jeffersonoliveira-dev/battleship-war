const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log('you requested this api');
});

router.post('/login', (req, res) => {
  console.log(req.body)

})

module.exports = router;
