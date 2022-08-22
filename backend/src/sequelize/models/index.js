const Date = require('./Date')
const Order = require("./Order")
const Service = require('./Service')
const Client = require('./Client')
const Provider = require('./Provider')


Order.belongsToMany(Service, { through: 'servi_orde' });
Service.hasMany(Order);

Provider.hasMany(Service, { sourceKey: "user", foreignKey: "userName" })
Service.belongsTo(Provider, { targetKey: "user", foreignKey: "userName" })

Service.hasOne(Date, {sourceKey:"id", foreignKey:"serviceId"});
Date.belongsTo(Service, {targetKey: "id", foreignKey:"serviceId"});

module.exports = { Date, Order, Service, Client, Provider }