const { DataTypes } = require('sequelize');
const sequelize = require('../index')

const Client = sequelize.define("Client", {
    user: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    firstName: {
        type: DataTypes.STRING,
    },
    lastName: {
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
    },
})

module.exports = Client