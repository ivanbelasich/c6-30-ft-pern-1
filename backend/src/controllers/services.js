const { Service, Date } = require('../sequelize/models')
export const getServices = async (req, res, next) =>{
    const data = await Service.findAll({include: {
        model: Date,
    },});
    if (data) {
        try {
            return res.json(data);
        } catch (err) {
            console.log(err);
        }
    } else {
        
        res.send("No service in db");
    }
    res.send(data);

    // res.send('getServices!');
}

export const getService = async (req, res, next) =>{
    const id = req.params.id;
    if (!id) next({ msg: 'no mando id', status: 500 })

    try {

        const data = await Service.findAll({
            where: { id: id },
            attributes: ["id", "description"],
        });

        console.log("soy data ", data);

        return res.json(data);
    } catch (err) {
        next(err);
    }
    // res.send('getService!');
}
export const getServicesCount = (req, res, next) =>{
    res.send('getServicesCount');
}

export const createServices = async (req, res, next) =>{
    try {
        const { name, value, date, time, description } = req.body;
        
        const myDate = await Date.create({
            monday: date.monday, tuesday: date.tuesday, wednesday: date.wednesday, thursday: date.thursday, friday:date.friday, saturday:date.saturday, sunday: date.sunday,
        })
        
        console.log(myDate)
        const ServiceData = await Service.create({
            name,
            value,
            // date,
            // time,
            description

        })
        console.log('serviceData', ServiceData)
        await ServiceData.addDate(myDate);
        return res.json(ServiceData);

    } catch (err) { 
        next(err);
    }
    // res.send('createServices!');
}


export const deleteServices = (req, res, next) =>{
    res.send('deleteServices!');
}

export const updateServices = (req, res, next) =>{
    res.send('updateServices!');
}
