const mongoose = require("mongoose");

const package = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  time: { type: Date },
});

module.exports = mongoose.model("Package", package);
