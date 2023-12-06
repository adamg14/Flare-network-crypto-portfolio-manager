const bcrypt = require("bcrypt");

function passwordHashSalt(plaintextPassword){
    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(plaintextPassword, salt);

    return passwordHash;
}


module.exports = passwordHashSalt;