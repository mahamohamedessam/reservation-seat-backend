// src/controllers/CustomerController.js
const Restaurant = require('../model/resturantModel');
const Reservation = require('../model/reservationModel');
const Customer = require('../model/customerModel');

const createReservation = async (req, res) =>{
    // const{customerId,restaurantId,numberOfSeats,reservationTime}=res.body;
    // const reservation =  await Reservation.create({ customerId,restaurantId,numberOfSeats,reservationTime});
     
    //   return res.send({reservation});

    const { customerId,restaurantId,numberOfSeats,reservationTime } = req.body;
      const reservation = new Reservation({ customerId,restaurantId,numberOfSeats,reservationTime });
      const savedReservation = await reservation.save()
      res.send({savedReservation});
};

const getALLRestaurants = async (req, res) => {
    // return await Restaurant.find({});
    const reser = await Restaurant.find({});
    return res.send({reser});
};



const cancelReservation = (req, res) => {
    const { customerId } = req.params;
  
    // Find the index of the reservation in the array based on customer ID
    const reservationIndex = reservations.findIndex((reservation) => reservation.customerId === customerId);
  
    if (reservationIndex === -1) {
      res.status(404).send('No matching reservations found');
    } else {
      // Remove the reservation from the array
      reservations.splice(reservationIndex, 1);
      res.send('Reservation deleted successfully');}
  };

  const getRestaurant =  async (req , res) => {
    const reser = await Restaurant.findById({restaurantId});
    //return res.send({reser});
    if (reser) {
        return res.send(reser); // Send restaurant data if found
      } else {
        return res.status(404).send({ message: 'Restaurant not found' }); // Handle not found
      }
  };

/*
  const updatereservation = async(req,res) => {
    const { customerId } = req;
    const { filename, image } = args.design;

    const updates = {};
    if( filename !== undefined && filename!==null) {
      updates.filename = filename
    }

    if( image !== undefined && image!== null) {
      updates.image = image
    }

    return await Design.findByIdAndUpdate(id, updates, {new: true});

  },

  const existingReservation = await Reservation.findById(id);

  // Check if reservation exists
  if (!existingReservation) {
    return res.status(404).send({ message: 'Reservation not found' });
  }

  // Extract updated data from request body
  const { startDate, endDate, guests, ...additionalData } = req.body;

  // Validate updated data (optional, adapt to your specific needs)
  if (!startDate || !endDate) {
    return res.status(400).send({ message: 'Missing required fields' });
  }

  // Build update object
  const updateData = { startDate, endDate, guests, ...additionalData };

  // Update reservation document
  await Reservation.updateOne({ _id: id }, updateData);

  // Fetch updated reservation data
  const updatedReservation = await Reservation.findById(id);

  // Send successful response with updated data
  return res.send({
    message: 'Reservation updated successfully',
    reservation: updatedReservation,
  });
} catch (error) {
  console.error(error);
  return res.status(500).send({ message: 'Internal server error' });
}
});
  
// const getRestaurantDetails = async (req, res) => {
// };

// const  bookTable = async (req, res) => {
// };

*/



module.exports={
    createReservation,
    getALLRestaurants,
}
