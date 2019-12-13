const express = require("express");
const router = express.Router();

router.post("/login", (req, res) => {
  console.log(req.body);

  // check if name already exists?
  // if exists ?
  // check password ?
  // if true ?
  // redirect
  // if false?
  // create account
});

module.exports = router;
