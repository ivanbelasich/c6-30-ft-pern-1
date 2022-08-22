function serviceDeleteHandler(deleter, errorManager, errorResponse) {
    return async function (req, res, next) {
        try {
            let success = await deleter({ id: req.body.id })
            if (!success) return res.status(400).send(errorResponse("Service ID not found"))
            return res.send({ success: true, message: "Service successfully deleted." })
        }
        catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errorResponse(message))

        }

    }
}

module.exports = serviceDeleteHandler