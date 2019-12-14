const express = require("express");
const router = express.Router();
const User = require("../../db/Users");

router.post("/login", (req, res) => {
  console.log(req.body);

  User.getUserByNickname(req.body.nickname, (err, user) => {
    if (err) throw err;
    if (!user) {
      console.log("user doesnt exist");
      let newUser = new User(req.body);
      User.createUser(newUser, (err, result) => {
        if (err) throw err;
        console.log(user);
        res.send(true);
      });
    } else {
      console.log("user exist");
      User.comparePassword(req.body.password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          console.log("password correto");
          res.send(true);

          // redirect
        } else {
          console.log("password incorreto");
          res.send(false);
          // wrong password or nickname already taken
        }
      });
    }
  });
});

module.exports = router;
