let errorResponse = require('./errorResponse')

function errorManager(error) {
    console.log(error)
    if (error.response) {
        return {
            status: error.response.status,
            ...errorResponse(error.response.data.message || `Server responded with code ${error.response.status}`)
        }
    } else if (error.request) {
        return {
            status: 500,
            ...errorResponse("There was a problem connecting to the server.")
        }
    } else if (error.status && error.message) {
        return {
            status: error.status,
            ...errorResponse(error.message)
        }
    } else {
        return {
            status: 500,
            ...errorResponse("Unexpected error.")
        }
    }
}

module.exports = errorManager
