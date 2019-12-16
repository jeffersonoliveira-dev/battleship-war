const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const UserSchema = new Schema({
  nickname: String,
  password: String
  score: Number
});

const User = (module.exports = mongoose.model("User", UserSchema));

module.exports.getUserByNickname = function(nickname, callback) {
  const query = { nickname: nickname };
  User.findOne(query, callback);
};

module.exports.createUser = function(newUser, callback) {
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newUser.password, salt, function(err, hash) {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = function(candidatePassword, hash, callback) {
  bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
    if (err) throw err;
    callback(null, isMatch);
  });
};
