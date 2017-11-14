'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: 'Please enter you name'
  },
  email: {
    type: String,
    required: 'Please enter your 4Geeks email'
  },
  Created_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('User', UserSchema);
