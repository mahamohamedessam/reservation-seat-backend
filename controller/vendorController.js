// src/controllers/VendorController.js
const Restaurant = require('../model/resturantModel');
const Reservation = require('../model/reservationModel');
const Vendor = require('../model/vendorModel');

const getALLRestaurantsByVendorId = async (req, res) => {
    // const vendorId = req.params.vendorId;
    // const restaurants = await Restaurant.find({ vendorId });
    // res.send({ restaurants });
    const { id } = res;
    const restaurants = await Restaurant.find({id });
    res.send({ restaurants });
};


const addRestaurant = async (req, res) => {
  // Implementation to add a restaurant
};

const deleteRestaurant = async (req, res) => {
  // Implementation to delete a restaurant
};

const getBookedTables = async (req, res) => {
  // Implementation to get booked tables for a restaurant
};

module.exports={
    getALLRestaurantsByVendorId,
}
