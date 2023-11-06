const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema({
  names: [{ type: String }], // Array of names
  competitionName: String, // Competition name
  organizedBy: String, // organized by
  description: String, // Description
  position: String, // Position
  date: Date, // Date
  year: String, // Year
  type: String, // Type
});

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = Achievement;
