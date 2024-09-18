const express = require('express');
const router = express.Router();
const passport = require('passport');
const Signup = require('../models/signup');

// Initialize Passport
router.use(passport.initialize());
router.use(passport.session());

// Render the registration form
router.get("/signup", (req, res) => {
    res.render("signup");
});

// Register a new user
router.post("/signup", async (req, res) => {
    try {
        const { userName, email, role, branch, password } = req.body;

        const existingUser = await Signup.findOne({ email });
        if (existingUser) {
            return res.status(400).send("A user with this email is already in existence");
        }

        // Create a new user instance
        const newUser = new Signup({ userName, email, role, branch });

        // Register the user with Passport (hashes password)
        Signup.register(newUser, password, (err) => {
            if (err) {
                console.error("Error registering user:", err);
                return res.status(500).send("Error registering user");
            }
            res.redirect("/login");
        });
    } catch (err) {
        console.error("Error during registration:", err);
        res.status(400).render("signup", { title: "Signup", errorMessage: "Registration failed. Try again." });
    }
});

// Render the login form
router.get("/login", (req, res) => {
    res.render("login");
});

// Handle login and role-based redirection
router.post("/login", passport.authenticate("local", { failureRedirect: "/login" }), (req, res) => {
    req.session.user = req.user;  // Store the authenticated user in session

    // Role-based redirection
    if (req.user.role === "manager") {
        res.redirect("/dashboard");
    } else if (req.user.role === "sales-agent") {
        res.redirect("/salesagent-dashboard");
    } else {
        res.send("User role is not recognized in the system.");
    }
});

// Logout route
router.get("/logout", (req, res) => {
    if (req.session) {
        req.session.destroy((err) => {
            if (err) {
                return res.status(500).send("Error logging out");
            }
            res.redirect("/landingpage");
        });
    } else {
        res.send("No active session found");
    }
});

module.exports = router;