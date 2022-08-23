const { DataTypes } = require('sequelize');
const sequelize = require('../index')
const Order = sequelize.define("Order", {
	provider: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	client: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	value: {
		type: DataTypes.INTEGER,
		allowNull: false
	},
	date: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	}
})

module.exports = Order