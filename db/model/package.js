const mongoose = require("mongoose");

const package = new mongoose.Schema({
  project: { type: mongoose.Schema.Types.ObjectId, ref: "Project" },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  title: { type: String, required: true },
  amount: { type: Number, required: true },
  describe: { type: String, required: true },
  arrive: { type: String, required: true },
});

module.exports = mongoose.model("Paxkage", package);
