// src/routes/vendorRoutes.js
const express = require('express');
const router = express.Router();
const VendorController = require('../controller/vendorController');
// const authMiddleware = require('../middleware/authMiddleware');

// router.use(authMiddleware);

router.get('/vendors/:vendorId/restaurants', VendorController.getALLRestaurantsByVendorId);
// router.post('/restaurants', VendorController.addRestaurant);
// router.delete('/restaurants/:id', VendorController.deleteRestaurant);
// router.get('/booked-tables/:restaurantId', VendorController.getBookedTables);

module.exports = router;
