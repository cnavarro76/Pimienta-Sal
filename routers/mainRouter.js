const express = require('express');
const mainController = require('../controllers/main');
const mainRoutes = express.Router();

mainRoutes.get('/', mainController.home);
mainRoutes.get('/detalleMenu/:id', mainController.detalleMenu);

mainRouters.get('/about', mainController.about);

module.exports = mainRouters;