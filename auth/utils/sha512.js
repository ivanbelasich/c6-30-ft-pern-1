let crypto = require('crypto')
function sha512(password, salt) {
    var hash = crypto.createHmac("sha512", salt);
    hash.update(password);
    var hash = hash.digest("hex");
    return {
        salt,
        hash,
    };
};
module.exports = sha512