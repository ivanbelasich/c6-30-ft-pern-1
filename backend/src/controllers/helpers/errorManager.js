let errorResponse = require('./errorResponse')

function errorManager(error) {
    if (error.response) {
        return {
            status: error.response.status,
            json: errorResponse(error.response.data.message || `Server responded with code ${error.response.status}`)
        }
    } else if (error.request) {
        return {
            status: 500,
            json: errorResponse("There was a problem connecting to the server.")
        }
    } else if (error.status && error.message) {
        return {
            status: error.status,
            json: errorResponse(error.message)
        }
    } else {
        return {
            status: 500,
            json: errorResponse("Unexpected error when connecting to the auth server")
        }
    }
}

module.exports = errorManager
