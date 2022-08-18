async function registerValidator(user, password, access) {
    let checkTypes = { user, password, access }
    for (let field in checkTypes) {
        if (typeof checkTypes[field] !== "string") return false
        if (checkTypes[field].length < 1) return false
    }
    return true
}

module.exports = registerValidator