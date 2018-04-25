'use strict';
// TODO DOC
const ArticleController        = require('../controllers/articles');
const express               = require('express');

const {
    validateParam,
    validateBody,
    validateQuery,
    schemas
} = require('../helpers/router');


// get an instance of the router for api routes
const apiRouter             = express.Router();

// TODO validators
// route to authenticate a user (POST http://localhost:3000/api/register)
apiRouter.post('/create', ArticleController.create);

// route to authenticate a user (POST http://localhost:3000/api/login)
apiRouter.get('/:id', ArticleController.find);

// route to modify an user (PATCH http://localhost:3000/api/edit)
apiRouter.patch('/:id', ArticleController.update);

apiRouter.delete('/:id', ArticleController.remove);


apiRouter.route('/:id')
    .get(validateParam(schemas.idSchema, 'id'), ArticleController.find)
    .put([
            validateParam(schemas.idSchema, 'id'),
            validateBody(schemas.articleSchema)
        ],
        ArticleController.update
    )
    .patch([
            validateParam(schemas.idSchema, 'id'),
            validateBody(schemas.partialArticlechema)
        ],
        ArticleController.update
    )
    .delete(validateParam(schemas.idSchema, 'id'), ArticleController.remove);

module.exports = apiRouter;