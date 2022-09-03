let refresher = require('../refresh/refresher')
let getAccessToken = require('../refresh/getAccessToken')
let tokenDecode = require('../../jwt/tokenDecode')
let tokenValidate = require('../../jwt/tokenValidate')
let findEntry = require('../login/findEntry')
let payloadResponse = require('../../utils/payloadResponse')
let createTokens = require('../../jwt/createTokens')

let handlePost = refresher(
    getAccessToken,
    tokenDecode,
    tokenValidate,
    findEntry,
    createTokens,
    payloadResponse
)

module.exports = { handlePost }