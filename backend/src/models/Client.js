const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('User', {
        user: {
            type: DataTypes.STRING,
            allowNull: false
        },
		firstName: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		lastName: {
            type: DataTypes.STRING,			
			allowNull: false,
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
		},
	});
};