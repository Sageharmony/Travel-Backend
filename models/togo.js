const mongoose = require('mongoose');

const togoSchema = new mongoose.Schema({
    location: String,
    country: String,
    mustSee:[String],
    restaurants:[String],

  });

const Togo = mongoose.model('Togo', togoSchema);

module.exports = Togo;