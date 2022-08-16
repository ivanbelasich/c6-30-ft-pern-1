const Date = require('./Date')
const Order = require("./Order")
const Service = require('./Service')

Date.belongsToMany(Service, { through: 'date_servi' });
Order.belongsToMany(Service, { through: 'servi_orde' });
Service.hasMany(Order);
Service.hasMany(Date);

module.exports = { Date, Order, Service }