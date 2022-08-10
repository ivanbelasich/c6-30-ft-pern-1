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
    },
    salt: {
        type: DataTypes.STRING(16),
    }
}, {
});

module.exports = User