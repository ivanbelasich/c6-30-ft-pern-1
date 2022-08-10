const { Servicio } = require('../db');

export const getServices = async (req, res, next) =>{
    const data = await Servicio.findAll();
    if (data) {
        try {
            return res.json(data);
        } catch (err) {
            console.log(err);
        }
    } else {
        // console.log("No data found");
        res.send("No service in db");
    }
    res.send(data);

    // res.send('getServices!');
}

export const getService = async (req, res, next) =>{
    const id = req.params.id;
    if (!id) next({ msg: 'no mando id', status: 500 })

    try {

        const data = await Servicio.findAll({
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
        const ServiceData = await Servicio.create({
            name,
            value,
            date,
            time,
            description

        })
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
