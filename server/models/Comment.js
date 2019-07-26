const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schemaName = new Schema({
  description: String,
  userID: String,
  favourited: { type: Boolean, default: false },
  
},{
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }
  });

const Model = mongoose.model('Comment', schemaName);
module.exports = Model;