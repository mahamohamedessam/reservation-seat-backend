// src/routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const CustomerController = require('../controller/customerController');
// const authMiddleware = require('../middleware/authMiddleware');

// router.use(authMiddleware);
// router.get('/restaurants', (req,res)=>{
//     res.send('all resturants');
// });
router.get('/allrestaurants', CustomerController.getALLRestaurants);
router.post('/createReservation', CustomerController.createReservation);
//router.delete('/reservations/:id', CustomerController.cancelReservation);
  
// router.get('/restaurants/:id', CustomerController.getRestaurantDetails);
// router.post('/book-table', CustomerController.bookTable);
// router.delete('/cancel-reservation/:id', CustomerController.cancelReservation);

module.exports = router;
