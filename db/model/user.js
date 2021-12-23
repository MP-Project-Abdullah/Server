const mongoose = require("mongoose");

const user = new mongoose.Schema({
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Role",
    default: "61c04786ff8aeaad62406e9d",
  },
  username: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, require: true },
  avatar: {
    type: String,
    default:
      "https://previews.123rf.com/images/kritchanut/kritchanut1406/kritchanut140600093/29213195-male-silhouette-avatar-profile-picture.jpg",
  },
  activate: { type: Boolean, default: false },
  activateCode: { type: String },
  resetPass: { type: Boolean, default: false },
  resetCode: { type: String },
  isDel: { type: Boolean, default: false },
  spam: { type: Number },
});

module.exports = mongoose.model("User", user);
