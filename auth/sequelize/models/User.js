const { DataTypes } = require('sequelize');
const sequelize = require('../index')

const User = sequelize.define('User', {
    user: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true
        }
    },
    password: {
        type: DataTypes.STRING(128),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    salt: {
        type: DataTypes.STRING(16),
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    access: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    }
}, {
});

module.exports = User