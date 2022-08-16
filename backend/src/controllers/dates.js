const { Order, Service, Date } = require('../sequelize/models')

export const getDates = async (req, res, next) =>{
    const data = await Date.findAll();
    if (data) {
        try {
            return res.json(data);
        } catch (err) {
            console.log(err);
        }
    } else {
        console.log("No data found");
        res.send("No date in db");
    }
    res.send(data);

}

export const getDate = async (req, res, next) =>{
    const id = req.params.id;
    if (!id) next({ msg: 'no mando id', status: 500 })

    try {

        const data = await Date.findAll({
            where: { id: id },
            // attributes: ["id", "description"],
        });

        console.log("soy data ", data);

        return res.json(data);
    } catch (err) {
        next(err);
    }
    // res.send('getOrder!');
}
export const getDatesCount = (req, res, next) =>{
    res.send('getOrdersCount!');
}

export const createDates = async (req, res, next) =>{
    const id = req.params.id;
    const data = req.body;
    let info = await Service.findOne({where:{id:id}});
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
        
        
        const OrderData = await Order.create({
            name:info.name,
            value: info.value,
            date:data.date,
            time:data.time,
            description: info.description,
            servicioId: info.id
        }) 
        await OrderData.addServices(info.id)
        res.send(OrderData);
       } 
    }else{
        res.send("no hay disponibilidad horaria");
    }
  
}

export const deleteDates = (req, res, next) =>{
    res.send('deleteOrders!');
}

export const updateDates = (req, res, next) =>{
    res.send('updateOrders!');
}


