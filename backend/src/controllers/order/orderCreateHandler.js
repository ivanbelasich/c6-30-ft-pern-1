function orderCreateHandler(fetchOrders,availabler, dbOrderCreate, errorManager, errorResponse) {
    return async function (req, res, next) {
        let { user, provider, serviceId, date } = req.body
        try {
            let assignedOrders = await fetchOrders(serviceId)
            let isAvailable = availabler(date, assignedOrders)
            if (!isAvailable) return res.status(400).send(errorResponse("Date already assigned."))
            let creation = await dbOrderCreate(user, provider, serviceId)
            return res.send({ success: true, message: "Order successfully created." })
        } catch (error) {
            let { status, message } = errorManager(error)
            return res.status(status).send(errorResponse(message))
        }



        //Al fetchear los turnos nos indica cuales están
        //Al tirar get al servicio, te dice que turnos están tomados
        //onda, mensualmente.
        //Geteamos el servicio, comprobamos que turno está habilitado
        //Creamos un turno
        //Lo agregamos al servicio, y a los usuarios
        //PROFIT
        let success = await creator()
    }
}

module.exports = orderCreateHandler