function findOneQuery(findOne, extractor, errorManager, errorResponse) {
    return async function (req, res, next) {
        let params = extractor(req.url)
        try {
            let data = await findOne({ where: params })
            return res.send({ success: true, payload: data })
        } catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = findOneQuery