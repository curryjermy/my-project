const express = require("express");
const passport = require("passport");
const router = express.Router();


router.get("/produce-procured", (req, res) => {
    res.render("produce-procured");
});

router.get("/charts", (req, res) => {
    res.render("chart");
});

router.get("/produce-sold", (req, res) => {
    res.render("produce-sold");
});

router.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

router.get("/landingpage", (req, res) => {
    res.render("landingpage");
});

router.get("/signup", (req, res)=>{
    res.render("signup")
});

router.get("/login", (req, res)=>{
    res.render("login")
})

router.get("/salesagent-dashboard", (req, res)=>{
    res.render("salesagent-dashboard")
});

router.get("/reciept", (req, res)=>{
    res.render("receipt")
});












module.exports = router;