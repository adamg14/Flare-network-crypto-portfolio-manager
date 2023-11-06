const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 4000;
const getCryptoPriceFlare = require("./middleware/getCryptoPriceFlare");

const app = express();
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());


app.post("/cryptocurrency-price", async(req, res) =>{
    const priceResult = await getCryptoPriceFlare(req.body.cryptocurrency);
    res.send({
        "Crypto Currency Price": String(priceResult);
    });
});

app.listen(PORT, () => {
    console.log("Server listening on PORT " + PORT + "...");
});