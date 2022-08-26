let errorResponse = require("../utils/errorResponse")

function errorCatcher(error, req, res, next) {
    let { status, message } = error
    if (status && message) return res.status(status).send(errorResponse(message))
    else return res.status(500).send(errorResponse("Unexpected error"))
}

module.exports = errorCatcher