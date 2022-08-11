"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

require('dotenv').config();

var _require = require('sequelize'),
    Sequelize = _require.Sequelize;

var fs = require('fs');

var path = require('path');

var _process$env = process.env,
    DB_USER = _process$env.DB_USER,
    DB_PASSWORD = _process$env.DB_PASSWORD,
    DB_HOST = _process$env.DB_HOST; // console.log(DB_USER, DB_PASSWORD, DB_HOST)

var sequelize = new Sequelize("postgres://".concat(DB_USER, ":").concat(DB_PASSWORD, "@").concat(DB_HOST, "/turnero"), {
  logging: false,
  "native": false
});
var basename = path.basename(__filename);
var modelDefiners = []; // Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners

fs.readdirSync(path.join(__dirname, '/models')).filter(function (file) {
  return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js';
}).forEach(function (file) {
  modelDefiners.push(require(path.join(__dirname, '/models', file)));
}); // Injectamos la conexion (sequelize) a todos los modelos

modelDefiners.forEach(function (model) {
  return model(sequelize);
}); // Capitalizamos los nombres de los modelos ie: product => Product

var entries = Object.entries(sequelize.models);
var capsEntries = entries.map(function (entry) {
  return [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]];
}); // En sequelize.models están todos los modelos importados como propiedades

sequelize.models = Object.fromEntries(capsEntries); // Para relacionarlos hacemos un destructuring

var _sequelize$models = sequelize.models,
    Orden = _sequelize$models.Orden,
    Servicio = _sequelize$models.Servicio; // Aca vendrian las relaciones
// Product.hasMany(Reviews);

Orden.belongsToMany(Servicio, {
  through: 'servi_orde'
});
Servicio.hasMany(Orden);
module.exports = _objectSpread(_objectSpread({}, sequelize.models), {}, {
  // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize // para importart la conexión { conn } = require('./db.js');

});