'use strict';

const router = require('express-promise-router')();
const UserController = require('../controllers/users');

// ******************* jwt *******************
const jwt               = require('jsonwebtoken');      // used to create, sign and verify tokens

const {
    validateParam,
    validateBody,
    validateQuery,
    schemas
} = require('../helpers/validator');

router.route('/')
    .get(validateQuery(schemas.partialUserSchema), UserController.find)
    .post(validateBody(schemas.userSchema), UserController.create);

// route to authenticate a user (POST http://localhost:8080/api/authenticate)
router.route('/authenticate')
    .get(validateQuery(schemas.partialUserSchema), UserController.find);

router.get('/login')
    .get(validateQuery(schemas.partialUserSchema), UserController.find)
    .post(validateBody(schemas.userSchema), UserController.create);


// API ROUTES -------------------

// get an instance of the router for api routes
var apiRoutes = express.Router();




// route to return all users (GET http://localhost:8080/api/users)
apiRoutes.get('/users', function(req, res) {
    User.find({}, function(err, users) {
        res.json(users);
    });
});

// apply the routes to our application with the prefix /api
router.use('/api', apiRoutes);
