let sanitizer = (fieldsArray) => {
    return function (req, res, next) {
        let body = {}
        for (let i = 0; i < fieldsArray.length; i++) {
            let field = fieldsArray[i]
            if (req.body[field] === undefined) {
                return res.status(400).send({ success: false, message: `Property ${field} is missing or is undefined.` })
            }
            else body[field] = req.body[field]
        }
        req.body = body
        next()
    }
}

module.exports = sanitizer