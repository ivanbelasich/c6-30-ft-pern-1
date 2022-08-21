const { DataTypes } = require('sequelize');
const sequelize = require('../index')
const Provider = sequelize.define("Provider", {
    user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email : {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    country: {
        type: DataTypes.STRING,
    },
    img: {
        type: DataTypes.STRING,
    }
})

module.exports = Provider