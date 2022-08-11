const { Orden, Servicio, Fecha } = require('../db');

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
    const {date, time} = req.body;
    
    let info = await Servicio.findOne({where:{id:id}, include: {
        model: Fecha,
    }});
    
    const preCreate = info.fechas[0].id
    const fechaCheck = await Fecha.findOne({where: { id: preCreate }})
    console.log(fechaCheck[date]); 
    console.log(fechaCheck[date].includes(time)); 
    console.log(date)   
    console.log(time)  
    if (fechaCheck[date].includes(time)) { 
        
        let timee = fechaCheck[date].filter((i)=> i !== time);
         
        console.log(timee) 
        fechaCheck[date] = timee;
        console.log(fechaCheck.lunes); 
        
        if (info) {
            fechaCheck.update(
               { 
                lunes:fechaCheck.lunes,
                martes:fechaCheck.martes,
                miercoles:fechaCheck.miercoles,
                jueves:fechaCheck.jueves,
                viernes:fechaCheck.viernes,
                sabado:fechaCheck.sabado,
                domingo:fechaCheck.domingo,
               }
              
            );
        
        
        const OrderData = await Orden.create({
            name:info.name,
            value: info.value,
            date:date, 
            time:time,
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


