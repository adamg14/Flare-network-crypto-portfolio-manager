const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 4000;
const getCryptoPriceFlare = require("./middleware/getCryptoPriceFlare");
const mongoose = require("mongoose");
const app = express();
const Cryptocurrency = require("./models/Cryptocurrency");

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
mongoose.connect("mongodb+srv://admin:oxlwJ7QPZwlCF3vO@cluster0.sc1aozc.mongodb.net/portfolio");

app.post("/cryptocurrency-price", async(req, res) =>{
    const priceResult = await getCryptoPriceFlare(req.body.cryptocurrency);
    res.send({
        "Crypto Currency Price": String(priceResult)
    });
});

app.post("/add-cryptocurrency", async(req, res) => {
    const newAsset = new Cryptocurrency({
        cryptocurrency: req.body.cryptocurrency,
        amount: req.body.amount
    });
    newAsset.save().then(() => {
        console.log("Record added to database")
    }).catch((err) => {
        // throw an error
        console.log(err);
    });
});

app.listen(PORT, () => {
    console.log("Server listening on PORT " + PORT + "...");
});