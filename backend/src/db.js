require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const configDevelopment = {
	logging: false, 
	native: false,
}

const configProduction = {
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false
		}
	},
	logging: false, 
	native: false,
	
}

const config = process.env.NODE_ENV === "development" ? configDevelopment : configProduction;


const sequelize = new Sequelize(
	`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, config
	
);
const basename = path.basename(__filename);

const modelDefiners = [];


// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
	.filter(
		(file) =>
			file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
	)
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});



// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));



// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);



// En sequelize.models están todos los modelos importados como propiedades
sequelize.models = Object.fromEntries(capsEntries);



// Para relacionarlos hacemos un destructuring
const { Orden, Servicio, Fecha, Provider } = sequelize.models;


// Aca vendrian las relaciones
// Product.hasMany(Reviews);
Orden.belongsToMany(Servicio, { through: 'servi_orde' });
Fecha.belongsToMany(Servicio, { through: 'fecha_servi' });
Servicio.hasMany(Orden);
Servicio.hasMany(Fecha);
Provider.hasMany(Servicio)



module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
