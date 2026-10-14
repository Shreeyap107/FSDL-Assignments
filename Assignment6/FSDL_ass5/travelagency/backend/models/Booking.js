const mongoose = require("mongoose");
const bookingSchema = new mongoose.Schema({
  userId:String,
  packageId:String,
  travelers:Number
});
module.exports = mongoose.model("Booking", bookingSchema);
