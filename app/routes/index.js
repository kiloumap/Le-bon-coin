'use strict';
// TODO doc
const express                   = require("express");
const UserRouter                = require('./Users');
const app                       = express.Router();

app.use('/user', UserRouter);

module.exports = app;