"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var express = require('express'); // import route from './routes/index'


var routes = require('./routes/index.js');

var app = express();
app.use(express.json({
  limit: '50mb'
}));
app.use("/api", routes);
var _default = app;
exports["default"] = _default;