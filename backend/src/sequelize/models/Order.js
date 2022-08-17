const { DataTypes } = require('sequelize');
const sequelize = require('../index')
const Order = sequelize.define("Order", {
	name: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: false,
	},
	value: {
		type: DataTypes.INTEGER,
	},
	date: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	time: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

module.exports = Order