function orderCreateHandler(fetchOrders, checkIfAssigned, dbOrderCreate, errorManager, errorResponse) {
    return async function (req, res, next) {
        let { client, serviceId, date } = req.body
        try {
            let service = await fetchOrders(serviceId)
            let { Orders, Provider, description, value } = service
            let isAssigned = checkIfAssigned(date, Orders.map(k => k.dataValues.date))
            if (isAssigned) return res.status(400).send(errorResponse("Date already assigned."))
            let order = await dbOrderCreate({
                client,
                provider: Provider.user,
                date,
                description,
                value
            })
            await service.addOrder(order)
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