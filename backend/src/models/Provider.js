const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('Provider', {
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
		name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
		state: {
			type: DataTypes.STRING,
            allowNull: false,
		},
        country: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        img: {
            type: DataTypes.STRING,
            allowNull: false,
        }
	});
};