const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	
	sequelize.define('orden', {
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false,
		},
		id: {
			type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},

		value: {
			type: DataTypes.INTEGER,
		},
		// img: {
		// 	type: DataTypes.TEXT,
		// },
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
		
	});
};