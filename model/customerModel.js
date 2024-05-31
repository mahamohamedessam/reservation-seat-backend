// src/models/User.js
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true},
  password: { type: String, require: true},
  role: { type: String, enum: ['Vendor', 'Customer'] },
}, {
  timestamps : false,
});

module.exports = mongoose.model('Customer',  customerSchema );