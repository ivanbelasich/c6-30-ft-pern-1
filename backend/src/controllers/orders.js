const { Orden, Servicio } = require('../db');

export const getOrders = async (req, res, next) =>{
    const data = await Orden.findAll();
    if (data) {
        try {
            return res.json(data);
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log("No data found");
        res.send("No order in db");
    }
    res.send(data);
    // res.send('getOrders!');
}

export const getOrder = async (req, res, next) =>{
    const id = req.params.id;
    if (!id) next({ msg: 'no mando id', status: 500 })

    try {

        const data = await Orden.findAll({
            where: { id: id },
            attributes: ["id", "description"],
        });

        console.log("soy data ", data);

        return res.json(data);
    } catch (err) {
        next(err);
    }
    // res.send('getOrder!');
}
export const getOrdersCount = (req, res, next) =>{
    res.send('getOrdersCount!');
}

export const createOrders = async (req, res, next) =>{
    const id = req.params.id;
    const data = req.body;
    let info = await Servicio.findOne({where:{id:id}});
    let preCreate = info.time.includes(data.time);
    console.log(preCreate)
    if (preCreate) {
        let time = info.time.filter((i)=> i !== data.time);
        let date = !time?info.date.filter((i)=> i !== data.date):info.date;
        info.date = date;
        info.time = time;
        if (info) {
            info.update({
                date:info.date,
                time:info.time,
            });
        
        
        const OrderData = await Orden.create({
            name:info.name,
            value: info.value,
            date:data.date,
            time:data.time,
            description: info.description,
            servicioId: info.id
        }) 
        await OrderData.addServicios(info.id)
        res.send(OrderData);
       } 
    }else{
        res.send("no hay disponibilidad horaria");
    }
  
}

export const deleteOrders = (req, res, next) =>{
    res.send('deleteOrders!');
}

export const updateOrders = (req, res, next) =>{
    res.send('updateOrders!');
}


