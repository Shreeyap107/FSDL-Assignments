const mongoose = require("mongoose");
const packageSchema = new mongoose.Schema({
  title:String,
  location:String,
  price:Number,
  image:String
});
module.exports = mongoose.model("Package", packageSchema);
