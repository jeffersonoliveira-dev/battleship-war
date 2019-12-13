const express = require("express");
const router = express.Router();
const Users = require("../../db/Users");

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
