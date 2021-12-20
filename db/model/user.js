const mongoose = require("mongoose");

const user = new mongoose.Schema({
  role: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  activate: { type: Boolean, default: false },
  activateCode: { type: String },
  resetPass: { type: Boolean, default: false },
  resetCode: { type: String },
  isDel: { type: Boolean, default: false },
  spam: { type: Number },
});

module.exports = mongoose.model("User", user);
