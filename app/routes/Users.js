'use strict';
// TODO DOC
const UserController        = require('../controllers/users');
const express               = require('express');

// get an instance of the router for api routes
const apiRouter             = express.Router();

// TODO validators
// route to authenticate a user (POST http://localhost:3000/api/register)
apiRouter.post('/register', UserController.create);

// route to authenticate a user (POST http://localhost:3000/api/login)
apiRouter.post('/login', UserController.find);

// route to modify an user (PATCH http://localhost:3000/api/edit)
apiRouter.patch('/edit', UserController.update);

apiRouter.delete('/delete', UserController.remove);
module.exports = apiRouter;