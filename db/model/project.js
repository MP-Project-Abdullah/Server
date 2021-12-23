const mongoose = require("mongoose");

const project = new mongoose.Schema({
  comment: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  package: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
  describe: { type: String, required: true },
  title: { type: String, required: true },
  kind: { type: String, required: true },
  deadline: { type: String, required: true, default: 0 },
  goal: { type: Number, required: true },
  img: { type: String, required: true },
  desc: { type: String, required: true },
  time: { type: Date },
  approved: { type: Boolean, default: false },
  location: { type: String, required: true },
  pledged: { type: Number },
  isDel: { type: Boolean, default: false },
  img1: { type: String },
  img2: { type: String },
  img3: { type: String },
  img4: { type: String },
  img5: { type: String },
  img6: { type: String },
  desc1: { type: String },
  desc2: { type: String },
  desc3: { type: String },
  desc4: { type: String },
  desc5: { type: String },
  desc6: { type: String },
});

module.exports = mongoose.model("Project", project);
