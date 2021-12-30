const mongoose = require("mongoose");

const notifications = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  message: { type: String, required: true },
  showMessage: { type: Boolean, default: false },
});

module.exports = mongoose.model("Notifications", notifications);
