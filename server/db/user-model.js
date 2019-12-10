const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
var auth = require('express-mongoose-auth');

const userSchema = new Schema({
  username: String,
  hashed_password: String,
  salt: String,
  Score: Number,
});


auth.makeAuthable(userSchema);

const User = (module.exports = mongoose.model('User', userSchema));

module.exports.createUser = (newUser, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      newUser.password = hash;
      newUser.save(callback);
    });
  });
};

module.exports.comparePassword = (candidatePassword, hash, callback) => {
  bcrypt.compare(candidatePassword, hash, (err, isMath) => {
    if (err) throw err;
    callback(null, isMath);
  });
};
