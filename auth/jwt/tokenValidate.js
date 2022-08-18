let tokenInfo = require('./tokenInfo')
function tokenValidate(payload) {
  if (
    !payload ||
    !payload.iss ||
    !payload.aud ||
    payload.iss !== tokenInfo.issuer ||
    payload.aud !== tokenInfo.audience
  )
    return false
  else return true;
}

module.exports = tokenValidate
