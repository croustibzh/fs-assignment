const mongoose = require("mongoose");

const player = mongoose.Schema({
  username: { type: String, required: true },
  rank: { type: Number, require: true },
  score: { type: Number, required: true },
  status: { type: String, required: true },
  time: { type: Number, required: true },
  fGame: { type: String, required: true }
});

module.exports = mongoose.model("playerSchemas", player);
