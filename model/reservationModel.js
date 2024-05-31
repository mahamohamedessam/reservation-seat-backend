// src/models/Reservation.js
const mongoose = require('mongoose');

const reservationSchema = new mongoose.Schema({
    customerId: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
    restaurantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant', required: true },
    numberOfSeats: { type: Number, required: true },
    reservationTime: { type: String, required: true },
}, {
    timestamps : false,
  });

module.exports = mongoose.model('Reservation', reservationSchema);
