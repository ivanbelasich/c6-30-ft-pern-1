var crypto = require('crypto')

function generateSalt() {
    return crypto.randomBytes(Math.ceil(64 / 2))
        .toString("hex")
        .slice(0, 16);
};

function sha512(password, salt) {
    var hash = crypto.createHmac("sha512", salt);
    hash.update(password);
    var hash = hash.digest("hex");
    return {
        salt,
        hash,
    };
};

function generatePassword(password) {
    var salt = generateSalt(); // Let"s generate the salt
    var { hash } = sha512(password, salt); // We get the password and the salt
    return { password: hash, salt }
}

module.exports = generatePassword