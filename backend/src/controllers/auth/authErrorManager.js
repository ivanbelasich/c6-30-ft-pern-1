let authError = require('./authError')
function authErrorManager(error) {
    if (error.response) {
        return {
            status: error.response.status,
            json: authError(error.response.data.message || `Auth server responded with code ${error.response.status}`)
        }
    } else if (error.request) {
        return {
            status: 500,
            json: authError("There was a problem connecting to the authentication server.")
        }
    } else {
        return {
            status: 500,
            json: authError("Unexpected error when connecting to the auth server")
        }
    }
}

module.exports = authErrorManager