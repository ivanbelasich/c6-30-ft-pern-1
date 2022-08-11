const createAccessToken = require("./createAccessToken");
const createRefreshToken = require("./createRefreshToken");

function createTokens(user) {
    return { accessToken: createAccessToken(user), refreshToken: createRefreshToken(user) }
}

module.exports = createTokens