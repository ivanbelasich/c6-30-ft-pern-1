"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateOrders = exports.getOrdersCount = exports.getOrders = exports.getOrder = exports.deleteOrders = exports.createOrders = void 0;

var getOrders = function getOrders(req, res, next) {
  res.send('getOrders!');
};

exports.getOrders = getOrders;

var getOrder = function getOrder(req, res, next) {
  res.send('getOrder!');
};

exports.getOrder = getOrder;

var getOrdersCount = function getOrdersCount(req, res, next) {
  res.send('getOrdersCount!');
};

exports.getOrdersCount = getOrdersCount;

var createOrders = function createOrders(req, res, next) {
  res.send('createOrders!');
};

exports.createOrders = createOrders;

var deleteOrders = function deleteOrders(req, res, next) {
  res.send('deleteOrders!');
};

exports.deleteOrders = deleteOrders;

var updateOrders = function updateOrders(req, res, next) {
  res.send('updateOrders!');
};

exports.updateOrders = updateOrders;