// src/models/Restaurant.js
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  vendorId: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true },
  name: { type: String},
  description: { type: String },
  image: { type: String, required: true },
  foodCategory: 
  { type: String, 
    enum: ['SeaFood', 'Grills','FiredChicken','Burger','Pizza','Desserts'],
    required: true 
  },
  numTables: { type: Number, required: true },
  numSeats: { type: Number, required: true },
  timeSlots: [{type: String}],
  longitude: { type: Number, required: true },
  latitude: { type: Number, required: true },
  // bookedTables: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reservation' }],
}, {
  timestamps : true,
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
