const mongoose = require("mongoose");
const stockSchema = new mongoose.Schema({
   producename: {
    type: String,
    trim: true,
   },
   producetype: {
    type: String,
    trim: true,
   },
   procurementdate: {
    type: Date,
    trim: true,
   },
   procurementtime: {
    type: String,
    trim: true,
   },
   produceweight: {
    type: Number,
    trim: true,
   },
   producecost: {
    type: Number,
    trim: true,
   },
   dealername: {
    type: String,
    trim: true,
   },
   branch: {
    type: String,
    trim: true,
   },
   branchcontact: {
    type: String,
    trim: true,
   },
   sellingprice: {
    type: String,
    trim: true,
   }
});
module.exports = mongoose.model("Stock", stockSchema);

