const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const expressSession = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 4000;
const getCryptoPriceFlare = require("./middleware/getCryptoPriceFlare");
const getCryptocurrencies = require("./middleware/getCryptocurrencies");
const registerUser = require("./middleware/registerUser");
const passwordHashSalt = require("./middleware/passwordHashSalt");
const handleLogin = require("./middleware/handleLogin");

const mongoose = require("mongoose");
const app = express();
const Cryptocurrency = require("./models/Cryptocurrency");
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());
app.use(expressSession({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.use(cookieParser());

mongoose.connect("mongodb+srv://admin:" + process.env.DATABASE_PASSWORD + "@cluster0.sc1aozc.mongodb.net/portfolio");

// middleware function authenticate the user by checking for a valid session to before the user can access the restricted parts of the web application
const authenticate = (req, res, next) => {
    if (req.session.user != null && req.cookies.user != null){
        next();
    }else{
        return res.redirect("/login");
    }
}
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
        console.log("Record added to database");
        res.send("Record added to database");
    }).catch((err) => {
        // throw an error
        console.log(err);
    });
});

app.get("/get-cryptocurrencies", async(req, res) => {
    res.send(await getCryptocurrencies());
});

app.get("/pie-chart-data", async(req, res) => {
    const priceData = [];
    const labelData = [];
    const assets = await getCryptocurrencies();
    for (let i = 0; i < assets.length; i++){
        const currentPrice = await getCryptoPriceFlare(assets[i]["cryptocurrency"]);
        console.log("THIS SHOULD BE THE CURRENT PRICE " + currentPrice);
        const assetValue = parseFloat(currentPrice) * assets[i]["amount"];
        priceData.push(assetValue);
        labelData.push(assets[i]["cryptocurrency"])
    }
    res.send({
        "Price Data": priceData,
        "Label Data": labelData
    });
});

app.post("/register", (req, res) => {
    registerUser(req, res);
});

app.post("login", (req, res) => {
    const loginSuccess = handleLogin(req, res);
    if (loginSuccess){
        // set the session
        req.session.user = req.body.userEmail;
        // set the cookie
        res.cookie("user", req.body.userEmail);
        console.log("user logged in successfully");
    }
});



app.get("/logout", (req, res) =>{
    // destroy both the session and the cookie here before logging the user out
    res.send("successfully logged out");
    console.log("logged out");
});

app.listen(PORT, () => {
    console.log("Server listening on PORT " + PORT + "...");
});