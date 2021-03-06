const mongoose = require("mongoose");

const story = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  describe: { type: String, required: true },
  url: { type: Array },
  desc1: { type: String },
  desc2: { type: String },
  desc3: { type: String },
  time: { type: Date },
  approve: { type: Boolean, default: false },
  reject: { type: Boolean, default: false },
});

module.exports = mongoose.model("Story", story);
