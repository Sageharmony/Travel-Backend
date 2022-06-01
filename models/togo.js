const mongoose = require('mongoose');

const togoSchema = new mongoose.Schema({
    location: String,
    country: String,
    mustSee:[String],
    restaurants:[String],
    isComplete: Boolean
  });

const Togo = mongoose.model('Togo', togoSchema);

module.exports = Togo;