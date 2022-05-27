const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
    location: String,
    mustSee: [String],
    image: String,
    restaurantsToTry: [String],
    bestTime: String,
    costPerPerson: Number
  });

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;