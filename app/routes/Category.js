'use strict';
// TODO DOC
const CategoryController        = require('../controllers/category');
const express                   = require('express');

// get an instance of the router for api routes
const apiRouter             = express.Router();

// TODO validators
// route to authenticate a user (POST http://localhost:3000/api/register)
//apiRouter.post('/register', CategoryController.create);

// route to authenticate a user (POST http://localhost:3000/api/login)
//apiRouter.post('/login', CategoryController.find);

// route to modify an user (PATCH http://localhost:3000/api/edit)
//apiRouter.patch('/edit', CategoryController.update);

//apiRouter.delete('/delete', CategoryController.remove);
module.exports = apiRouter;