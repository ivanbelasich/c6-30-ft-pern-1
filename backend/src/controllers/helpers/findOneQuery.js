function findOneQuery(findOne, extractor, errorManager, errorResponse) {
    return async function (req, res, next) {
        let params = extractor(req)
        try {
            let data = await findOne({ where: params })
            if (!data) return res.status(400).send(errorResponse("Requested data not found."))
            return res.send({ success: true, payload: data })
        } catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = findOneQuery