let crypto = require('crypto')

function generateSalt() {
    return crypto.randomBytes(Math.ceil(64 / 2))
        .toString("hex")
        .slice(0, 16);
};

module.exports = generateSalt