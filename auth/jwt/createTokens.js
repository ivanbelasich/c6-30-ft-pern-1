const createAccessToken = require("./createAccessToken");
const createRefreshToken = require("./createRefreshToken");

function createTokens(user, access) {
    return { accessToken: createAccessToken(user, access), refreshToken: createRefreshToken(user, access) }
}

module.exports = createTokens