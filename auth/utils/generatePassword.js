let generateSalt = require("./generateSalt")
let sha512 = require('./sha512')

function generatePassword(password) {
    var genSalt = generateSalt(); // Let"s generate the salt
    var { hash, salt } = sha512(password, genSalt); // We get the password and the salt
    return { password: hash, salt }
}

module.exports = generatePassword