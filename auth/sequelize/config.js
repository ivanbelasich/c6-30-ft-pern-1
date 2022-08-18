const fs = require('fs');

module.exports = {
    development: {
        username: process.env.AUTH_DB_USER,
        password: process.env.AUTH_DB_PASSWORD,
        database: process.env.AUTH_DB_NAME,
        host: process.env.AUTH_DB_HOST,
        port: process.env.AUTH_DB_PORT,
        dialect: 'postgres',

    },
    production: {
        username: process.env.AUTH_DB_USER,
        password: process.env.AUTH_DB_PASSWORD,
        database: process.env.AUTH_DB_NAME,
        host: process.env.AUTH_DB_HOST,
        port: process.env.AUTH_DB_PORT,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        },
    }
}

