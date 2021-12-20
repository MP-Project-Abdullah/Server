const mongoose = require("mongoose");

const story = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  desc: { type: String, required: true },
  img: { type: String, required: true },
  img1: { type: String },
  img2: { type: String },
  img3: { type: String },
  desc1: { type: String },
  desc2: { type: String },
  desc3: { type: String },
  time: { type: Date },
});

module.exports = mongoose.model("Story", story);
