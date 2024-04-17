const mongoose = require("mongoose");

const playerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: True,
  },
  clubs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Club",
    },
  ],
});

const Player = mongoose.model("Player", playerSchema);

module.exports = Player;
