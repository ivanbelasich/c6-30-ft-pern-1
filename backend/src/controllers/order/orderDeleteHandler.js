function orderDeleteHandler(deleter, errorManager, errorResponse) {
    return async function (req, res, next) {
        let { id } = req.body
        try {
            let success = await deleter({ id })
            if (!success) return res.status(400).send(errorResponse("Order ID not found"))
            return res.send({ success: true, message: "Order successfully deleted." })
        }
        catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = orderDeleteHandler