const express = require("express");
const router = express.Router();
const connectEnsureLogin = require("connect-ensure-login");

const Stock = require("../models/stock");

//addstock
router.get("/addstock", (req, res) => {
    res.render("produce-procured");
})
router.post("/addstock", async (req, res) => {
    try {
        const newProduce = Stock(req.body);
        await newProduce.save();
        res.redirect("/stock-table");
    } catch (err) {
        res.status(400).render("produce-procured");
        console.log("couldnt add stock", err);
    }
});

router.get("/stock-table", async (req, res) => {
    try {
        const stockItems = await Stock.find();
        res.render("stock-table",
            {
                title: "stock-table",
                stocks: stockItems,
            });
    } catch (err) {
        res.status(400).send("unable to find stock")
    }
});
//update route
router.get("/update-stock/:id", async (req, res) => {
    try {
        const stock = await Stock.findOne({ _id: req.params.id });
        res.render("updateform",
            {
                title: "updateform",
                stock: stock,
            }
        )
    } catch (err) {
        res.status(400).send("unable to update stock")
    }
});
router.post("/update-stock", async (req, res) => {
    try {
        await Stock.findOneAndUpdate({
            _id: req.query.id
        }, req.body);
        res.redirect("/stock-table");
    } catch (err) {
        res.status(400).send("couldnt update stock")
    }
});

router.get('/stock-view', async (req, res) => {
    try {
        const aggregatedData = await Stock.aggregate([
            {
                $match: { producename: { $in: ['beans', 'maize', 'soyabeans', 'cowpeas', 'gnuts', 'rice'] } }
            },
            {
                $group: {
                    _id: "$producename", // Group by product name
                    totalWeight: { $sum: { $toDouble: "$produceweight" } }, // Sum of weights
                }
            },
        ]);

        res.render('stock', { aggregatedData });
    } catch (err) {
        console.error(err);
        res.status(500).send('Error in fetching aggregation');
    }
});














module.exports = router;