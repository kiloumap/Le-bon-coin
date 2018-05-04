'use strict';

// TODO create check doc generate
const express                   = require("express");
const UserRouter                = require('./Users');
const ArticleRouter             = require('./Articles');
const CategoryRouter            = require('./Category');
const SubCategoryRouter         = require('./SubCategory');
const FieldRouter               = require('./Fields');
const ImageRouter               = require('./Images');
const app                       = express.Router();

app.use('/user', UserRouter);

app.use('/article', ArticleRouter);
app.use('/category', CategoryRouter);
//app.use('/subcategory', SubCategoryRouter);
//app.use('/field', FieldRouter);
//app.use('/image', ImageRouter);

module.exports = app;