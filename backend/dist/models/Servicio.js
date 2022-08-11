"use strict";

var _require = require('sequelize'),
    DataTypes = _require.DataTypes;

module.exports = function (sequelize) {
  sequelize.define('servicio', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false // unique: true,

    },
    value: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // img: {
    // 	type: DataTypes.TEXT,
    // },
    date: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    time: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};