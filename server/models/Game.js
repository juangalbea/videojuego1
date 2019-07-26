const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
  name: String,
  speed: Number,
  logic: Number,
  imageID: String,
  platforms: [],
  display: { type: Boolean, default: false }
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
});

const Model = mongoose.model('Game', schemaName);
module.exports = Model;