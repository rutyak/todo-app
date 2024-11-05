const mongoose = require("mongoose");

//----------User-Collection--------------
const userSchema = new mongoose.Schema({
    email: String,
    password: String,
  });

const User = mongoose.model('User', userSchema);

module.exports = {User}