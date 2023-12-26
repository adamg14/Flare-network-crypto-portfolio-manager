const passwordHashSalt = require("./passwordHashSalt");
const User = require("../models/User");

function registerUser(req, res){
    try {
        const hashedPassword = passwordHashSalt(req.body.password);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash: hashedPassword
        });

        newUser.save().then(() => {
            res.send({
                status: "success",
                message: "User added to the database."
            });
        });
        
    } catch (error) {
        res.send({
            status: "failure",
            message: "An error has occurred. Please try again later"
        });
    }
}

module.exports = registerUser;