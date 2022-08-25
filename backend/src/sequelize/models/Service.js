const { DataTypes } = require('sequelize');
const sequelize = require('../index')
const Service = sequelize.define("Service", {
	id: {
		type: DataTypes.UUID,
		defaultValue: DataTypes.UUIDV4,
		primaryKey: true,
		allowNull: false,
		get() {
			return this.getDataValue("id")
		}
	},
	category: {
		type: DataTypes.STRING,
		allowNull: false
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	value: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false,
	},
})

module.exports = Service