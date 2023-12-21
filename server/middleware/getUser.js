const mongoose = require("mongoose");
const User = require("../models/User");

mongoose.connect("mongodb+srv://admin:x2KwJVNaRJs7RiDl@cluster0.sc1aozc.mongodb.net/portfolio");

async function getUser(email){
    const selectedUser = await User.find({email: email});
    return selectedUser;
}

export default getUser;