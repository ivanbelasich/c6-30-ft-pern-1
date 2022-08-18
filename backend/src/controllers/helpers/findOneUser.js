function findOneUser(findOne, extractor, errorManager, errorResponse) {
    return async function (req, res, next) {
        let { user } = extractor(req.url)
        try {
            let data = await findOne({ where: { user } })
            if (!data) return res.status(400).send(errorResponse("User not found"))
            else return res.send({ success: true, payload: data })
        } catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = findOneUser