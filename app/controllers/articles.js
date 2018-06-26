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
    else res.status(500).send('Error');
};

// TODO findTitle
const findByTitle = (req, res) => {
    Article.findOne({title : req.value.params.title}, null)
        .populate('user')
        .exec((err, article) => {
            if(err){
                res.send(err);
            } else {
                res.send(201).json(article);
            }
        })
};

// TODO find
const find = (req, res) => {
    Article.find()
        .populate('user')
        .exec((err, articles) => {
            if(err){
                res.send(err);
            } else {
                res.json(articles);
            }
        })
};

// TODO doc
const update = (req, res) => {
    const { id } = req.value.params;
    const values = req.value.body;
    Article.findByIdAndUpdate(id, values, { new: true })
    .populate('ingredients')
    .exec((err, article) => {
        if(err)
            res.send(err);
        else
            res.status(201).json(article);
    });
};

// TODO remove
const remove = (req, res) => {

};
module.exports = {
    create,
    find,
    findByTitle,
    update,
    remove
};