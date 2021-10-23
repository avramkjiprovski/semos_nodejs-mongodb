const mongoose = require("mongoose");

const Planet = mongoose.model("planets", {
  name: String,
  size: Number,
  distanceFromSun: Number,
});

module.exports = Planet;
