'use strict';
// TODO DOC
const ArticleController         = require('../controllers/articles');
const express                   = require('express');
const verifyToken               = require('../helpers/token');

const {
    validateParam,
    validateBody,
    validateQuery,
    schemas
} = require('../helpers/validator');

// get an instance of the router for api routes
const apiRouter             = express.Router();


apiRouter.route('/')
    .post(validateBody(schemas.articleSchema), verifyToken, ArticleController.create)
    .get(validateBody(schemas.partialArticleSchema), ArticleController.find);
// #TODO doc
// route to  (POST http://localhost:3000/api/article)
apiRouter.route('/:id')
    .delete(validateBody(schemas.partialArticleSchema), verifyToken, ArticleController.remove)
    .patch(validateBody(schemas.partialArticleSchema), verifyToken, ArticleController.update)
    .get(validateBody(schemas.partialArticleSchema), ArticleController.find);

module.exports = apiRouter;