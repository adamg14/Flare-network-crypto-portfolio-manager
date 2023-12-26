const getUser = require("./getUser");
const passwordHashSalt = require("./passwordHashSalt");


async function handleLogin(req, res){
    const userEmail = req.body.userEmail;

    try {
        const userDetail = await getUser(userEmail);
        if (passwordHashSalt(userEmail) !==  userDetail.password){
            res.send("incorrect password");
            return false;
        }else if((passwordHashSalt(userEmail) ===  userDetail.password)){
            res.send("credentials correct");
            return true;
        }else{
            res.send("other error");
            return false;
        }
    } catch (error) {
        res.send(error);
    }
}

module.exports = handleLogin;