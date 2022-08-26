const recodePassword = require("../../utils/recodePassword")
const LoginError = require("./LoginError")

async function loginAuthenticator(inputPassword, storedPassword, storedSalt) {
    try {
        let result = recodePassword(inputPassword, storedSalt) === storedPassword
        if (!result) throw new LoginError(403, "Incorrect username or password.")
        else return true
    } catch (error) {
        throw error
    }
}
module.exports = loginAuthenticator