const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose")
const signupSchema = new mongoose.Schema({
    userName: {
        type: String,
        trim: true
    },
    email: {
        type: String,
        trim: true
    },
    role: {
        type: String,
        trim: true
    },
    branch: {
        type: String,
        trim: true
    }
});
signupSchema.plugin(passportLocalMongoose,{
    usernameField:"email", 
  });
  module.exports = mongoose.model("Signup", signupSchema);