const { DataTypes } = require('sequelize');
const Service = require('./Service')
const sequelize = require('../index')

const Date = sequelize.define('Date', {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
		allowNull: false,
	},
	monday: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},
	tuesday: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},
	wednesday: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},
	thursday: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},
	friday: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},
	saturday: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},
	sunday: {
		type: DataTypes.ARRAY(DataTypes.STRING),
		allowNull: true,
	},

})
Date.belongsToMany(Service, { through: 'date_servi' });
module.exports = Date