const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('fecha', {
        id: {
            type: DataTypes.UUID,
			defaultValue: DataTypes.UUIDV4,
			primaryKey: true,
			allowNull: false,
		},
        
        lunes: {
			type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
		},
		martes: {
			type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
		},
		miercoles: {
			type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
		},
		jueves: {
			type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
		},
        viernes: {
			type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
		},
        sabado: {
			type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
		},
        domingo: {
			type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull: true,
		},
		
		
	});
};