//dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const passport = require("passport");

//session
const expressSession = require("express-session")({
    secret: "secret",
    resave: false, //do not save their session after login
    saveUninitialized: false, //the session didnot start donot save
});
require("dotenv").config();

//import models
const Signup = require("./models/signup")
const Stock = require("./models/stock")
const Sales = require("./models/sale")

//importing routes
const allpagesRoutes = require("./routes/allpagesRoutes");
const signupRoute = require("./routes/signupRoute");
const stockRoute = require("./routes/stockRoute")
const saleRoute = require("./routes/saleRoute");

//instantation
const app = express();
const port = 5000;


//configurations
// set db connection to mongoose
mongoose.connect(process.env.DATABASE_LOCAL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true,
});

mongoose.connection
  .once("open", () => {
    console.log("Mongoose connection open");
  })
  .on("error", (err) => {
    console.error(`Connection error: ${err.message}`);
  });


// set view engine to pug
app.set("view engine", "pug"); // specify the view engine
app.set("views", path.join(__dirname, "views")); // specify the view directory

// middleware
app.use(express.static(path.join(__dirname, "public"))); // specify a folder for static files
app.use(express.urlencoded({ extended: true })); // helps to parse data from forms
app.use(express.json()); // helps to capture data in json

// express session configs
app.use(expressSession); // express session
app.use(passport.initialize()); //intialize passport
app.use(passport.session()); //use passport session

passport.use(Signup.createStrategy());
passport.serializeUser(Signup.serializeUser());
passport.deserializeUser(Signup.deserializeUser());

// use imported routes
app.use("/", allpagesRoutes);
app.use("/", signupRoute);
app.use("/", stockRoute);
app.use("/", saleRoute);

app.get("*", (req, res) => {
  res.send("Error! This page does not exist");
});

//bootstraping a server
app.listen(port, () => console.log(`listening on port ${port}`)); // string interporation

