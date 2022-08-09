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
        validate: {
            is: /^[0-9a-f]{64}$/i,
            notEmpty: true,
        }
    },
    salt: {
        type: DataTypes.STRING(16),
        validate: {
            is: /^[0-9a-f]{64}$/i,
            notEmpty: true,
        }
    }
}, {
});

module.exports = User