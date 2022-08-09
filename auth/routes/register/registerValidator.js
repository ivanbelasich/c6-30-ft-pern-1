async function registerValidator(user, password) {
    let checkTypes = { user, password }
    for (let field in checkTypes) {
        if (typeof checkTypes[field] !== "string") return false
        if (checkTypes[field].length < 1) return false
    }
    return true
}

module.exports = registerValidator