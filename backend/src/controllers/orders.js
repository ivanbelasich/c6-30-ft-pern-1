const { Order, Service, Date } = require('../sequelize/models')

export const getOrders = async (req, res, next) =>{
    const data = await Order.findAll();
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

        const data = await Order.findAll({
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
    
    let info = await Service.findOne({where:{id:id}, include: {
        model: Date,
    }});
    
    const preCreate = info.dates[0].id
    const dateCheck = await Date.findOne({where: { id: preCreate }})
    console.log(dateCheck[date]); 
    console.log(dateCheck[date].includes(time)); 
    console.log(date)   
    console.log(time)  
    if (dateCheck[date].includes(time)) { 
        
        let timee = dateCheck[date].filter((i)=> i !== time);
         
        console.log(timee) 
        dateCheck[date] = timee;
        console.log(dateCheck.monday); 
        
        if (info) {
            dateCheck.update(
               { 
                monday:dateCheck.monday,
                tuesday:dateCheck.tuesday,
                wednesday:dateCheck.wednesday,
                thursday:dateCheck.thursday,
                friday:dateCheck.friday,
                saturday:dateCheck.saturday,
                sunday:dateCheck.sunday,
               }
              
            );
        
        
        const OrderData = await Order.create({
            name:info.name,
            value: info.value,
            date:date, 
            time:time,
            description: info.description,
            serviceId: info.id
        }) 
        await OrderData.addServices(info.id)
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


