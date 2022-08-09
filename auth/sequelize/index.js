const { Sequelize } = require("sequelize")
const sequelize = new Sequelize(process.env.AUTH_DB)

module.exports = sequelize