'use strict';

// TODO create check doc generate
const express                   = require("express");
const UserRouter                = require('./Users');
const ArticleRouter             = require('./Articles');
const app                       = express.Router();

app.use('/user', UserRouter);
app.use('/article', ArticleRouter);

module.exports = app;