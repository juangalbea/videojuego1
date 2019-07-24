const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  Speed: Number,
  Logic: Number,
  imageID: String,
  platforms: Array,
  timestamp: Date,
  display: { type: Boolean, default: false },
});

const Model = mongoose.model('Game', schemaName);
module.exports = Model;