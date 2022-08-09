let sha512 = require('./sha512')

function recodePassword(password, salt) {
    var { hash } = sha512(password, salt); // We get the password and the salt
    return hash
}

module.exports = recodePassword