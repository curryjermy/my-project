const mongoose = require("mongoose");
const saleSchema = new mongoose.Schema({
   producename: {
      type: String,
      trim: true,
   },
   producetype: {
      type: String,
      trim: true,
   },
   produceweight: {
      type: Number,
      trim: true,
   },
   paidamount: {
      type: String,
      trim: true,
   },
   buyername: {
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
   salesagentName: {
      type: String,
      trim: true,
   }
});
module.exports = mongoose.model("Sale", saleSchema);

