const getUser = require("./getUser");
const passwordHashSalt = require("./passwordHashSalt");


async function handleLogin(req, res){
    const userEmail = req.body.userEmail;

    try {
        const userDetail = await getUser(userEmail);
        if (passwordHashSalt(userEmail) !==  userDetail.password){
            res.send("incorrect password");
        }else if((passwordHashSalt(userEmail) ===  userDetail.password)){
            res.send("credentials correct");
        }else{
            res.send("other error");
        }
    } catch (error) {
        res.send(error);
    }
}

export default handleLogin;