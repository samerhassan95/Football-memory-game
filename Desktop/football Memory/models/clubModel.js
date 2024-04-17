const mongoose = require("mongoose");

const clubSchema = new mongoose.Schema({
  name: {
    type: String,
    required: True,
  },
  logo: {
    type: String,
    required: true,
  },
});

const Club = mongoose.model("Club", clubSchema);

module.exports = Club;
