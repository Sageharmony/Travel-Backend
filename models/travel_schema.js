const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema({
    location: String,
    country: String,
    mustSee: [{}],
    image: String,
    restaurantsToTry: [{}],
    bestTime: String,
    costPerPerson: Number,
    lat: Number,
    lng: Number
  });

const Travel = mongoose.model('Travel', travelSchema);

module.exports = Travel;