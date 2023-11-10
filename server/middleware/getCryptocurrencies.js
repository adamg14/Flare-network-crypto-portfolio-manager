const mongoose = require("mongoose");
const Cryptocurrency = require("../models/Cryptocurrency");



async function getCryptocurrencies(){
    const assetList = await Cryptocurrency.find({});
    return assetList;
}

module.exports = getCryptocurrencies;