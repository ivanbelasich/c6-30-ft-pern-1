var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config({ path: path.join(__dirname, '.env') })
var indexRouter = require('./routes/index');

var app = express();
var sequelize = require('./sequelize');
const errorCatcher = require('./middleware/errorCatcher');

sequelize.authenticate()
    .then(() => console.log('Sequelize connection has been established successfully.'))
    .catch(err => console.error('Unable to connect to the database:', err))

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use(errorCatcher)
module.exports = app;
