function orderUpdateHandler(dbFinder, dbUpdater, errorManager, errorResponse) {
    return async function (req, res, next) {
        let { id, ...rest } = req.body
        try {
            let exists = await dbFinder({ id })
            if (!exists) return res.status(400).send(errorResponse("Order ID not found."))
            let success = await dbUpdater(id, { ...exists, ...rest })
            if (!success) return res.status(400).send(errorResponse("There was a problem updating the order."))
            else return res.send({ success: true, message: "Order successfully updated." })
        }
        catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errorResponse(message))
        }
    }
}

module.exports = orderUpdateHandler