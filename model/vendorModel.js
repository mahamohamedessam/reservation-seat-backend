const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: { type: String, require: true, unique: true},
  password: { type: String, require: true},
  role: { type: String, enum: ['Vendor', 'Customer'] },
}, {
  timestamps : true,
});

module.exports = mongoose.model('Vendor', vendorSchema);