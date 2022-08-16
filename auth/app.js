var express = require('express');
var cors = require('cors')
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config({ path: path.join(__dirname, '.env') })
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login')
var registerRouter = require('./routes/register')
var refreshRouter = require('./routes/refresh')
var availableRouter = require('./routes/available')

var app = express();
var sequelize = require('./sequelize')

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
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter)
app.use('/refresh', refreshRouter)
app.use('/available', availableRouter)

module.exports = app;
