"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateServices = exports.getServicesCount = exports.getServices = exports.getService = exports.deleteServices = exports.createServices = void 0;

var getServices = function getServices(req, res, next) {
  res.send('getServices!');
};

exports.getServices = getServices;

var getService = function getService(req, res, next) {
  res.send('getService!');
};

exports.getService = getService;

var getServicesCount = function getServicesCount(req, res, next) {
  res.send('getServicesCount');
};

exports.getServicesCount = getServicesCount;

var createServices = function createServices(req, res, next) {
  res.send('createServices!');
};

exports.createServices = createServices;

var deleteServices = function deleteServices(req, res, next) {
  res.send('deleteServices!');
};

exports.deleteServices = deleteServices;

var updateServices = function updateServices(req, res, next) {
  res.send('updateServices!');
};

exports.updateServices = updateServices;