'use strict';
// TODO DOC
const UserController        = require('../controllers/users');
const express               = require('express');
const verifyToken           = require('../helpers/token');

const {
    validateParam,
    validateBody,
    validateQuery,
    schemas
} = require('../helpers/validator');

// get an instance of the router for api routes
const apiRouter             = express.Router();

// route to authenticate a user (POST http://localhost:3000/api/register)
//apiRouter.post('/register', UserController.create);
apiRouter.route('/')
    .post(validateBody(schemas.userSchema), UserController.create)
    .delete(validateBody(schemas.partialUserSchema), verifyToken, UserController.remove)
    .patch(validateBody(schemas.partialUserSchema), verifyToken, UserController.update);

// route to authenticate a user (POST http://localhost:3000/api/login)
apiRouter.route('/login')
    .post(validateBody(schemas.partialUserSchema), UserController.find);

module.exports = apiRouter;