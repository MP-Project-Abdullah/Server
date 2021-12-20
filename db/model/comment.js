const mongoose = require("mongoose");

const comment = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  desc: { type: String, required: true },
  time: { type: Date },
});

module.exports = mongoose.model("Comment", comment);
