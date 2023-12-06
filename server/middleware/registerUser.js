import passwordHashSalt from "./passwordHashSalt";
import User from "../models/User";

function registerUser(req, res){
    try {
        const hashedPassword = passwordHashSalt(req.body.password);
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            passwordHash: hashedPassword
        });

        newUser.save().then(() => {
            res.send("user added to database");
        });
        
    } catch (error) {
        res.send(error);
    }
}

module.exports = registerUser;