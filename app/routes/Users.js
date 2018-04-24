'use strict';

const router                = require('express-promise-router')();
const UserController        = require('../controllers/users');
const express               = require("express");

const {
    validateParam,
    validateBody,
    validateQuery,
    schemas
} = require('../helpers/validator');

// TODO validators
// route to authenticate a user (POST http://localhost:8080/api/register)
router.route('/register')
    .post(UserController.register);

// route to authenticate a user (POST http://localhost:8080/api/login)
router.route('/login')
    .post(UserController.login);

// API ROUTES -------------------

// get an instance of the router for api routes
let apiRoutes = express.Router;

// apply the routes to our application with the prefix /api
router.use('/api', apiRoutes);

module.exports = apiRoutes;