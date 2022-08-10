let createAccessToken = require('../../jwt/createAccessToken')
let createRefreshToken = require('../../jwt/createRefreshToken')

function tokenGenerator(user) {
    let accessToken = createAccessToken(user)
    let refreshToken = createRefreshToken(user)
    return { accessToken, refreshToken }
}
module.exports = tokenGenerator