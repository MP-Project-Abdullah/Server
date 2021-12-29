const mongoose = require("mongoose");

const story = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  describe: { type: String, required: true },
  url: { type: Array },
  desc1: { type: String },
  desc2: { type: String },
  desc3: { type: String },
  time: { type: Date },
});

module.exports = mongoose.model("Story", story);
