'use strict';

const jwt               = require("jsonwebtoken");
const expressJwt        = require('express-jwt');

const bcrypt            = require('bcryptjs');
const Article           = require('../models/Articles');
const config            = require("../../config/config");

// TODO create
const create = (req, res) => {
    const article = new Article(req.value.body);
    article.users = req.decoded._id;
    const ret = Article.populate(article.save(), 'users');
    if(ret) res.status(201).send('Article created');
};

// TODO find
const find = (req, res) => {
    const ret = Article.findOne({'title' : 'voiture'});
    console.log(ret);
    res.status(201).send(ret);
};

// TODO update
const update = (req, res) => {

};

// TODO remove
const remove = (req, res) => {

};
module.exports = {
    create,
    find,
    update,
    remove
};