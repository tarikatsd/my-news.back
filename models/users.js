const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  token: String,
  canBookmark: Boolean,
})


const User = mongoose.model("Users", UserSchema);
module.exports = User;
