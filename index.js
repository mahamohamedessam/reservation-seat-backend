const express = require('express');
const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const dotenv = require('dotenv');
const CustomerRouter = require('./routes/customerRouter');
const VendorRouter = require('./routes/vendorRouter');

mongoose.connect('mongodb://127.0.0.1:27017/ResturantReservation')
.then(()=>{
    console.log('Mongo Connected');
})
.catch(()=>{
    console.log('Mongo not connected');
});

const app=express();
app.use(express.json());

app.use('/api/',CustomerRouter);
app.use('/api/',VendorRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});