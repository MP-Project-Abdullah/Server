const mongoose = require("mongoose");

const userPackages = new mongoose.Schema({
  package: { type: mongoose.Schema.Types.ObjectId, ref: "Package" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  total: { type: Number },
});

module.exports = mongoose.model("UserPackages", userPackages);
