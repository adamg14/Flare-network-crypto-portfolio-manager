const mongoose = require("mongoose");

const cryptocurrencySchema = mongoose.Schema({
    cryptocurrency: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    userEmail: {
        type: String,
        required: true
    }
});

const cryptocurrencyModel = mongoose.model("Cryptocurrency", cryptocurrencySchema)
module.exports = cryptocurrencyModel;