'use strict';

const jwt               = require("jsonwebtoken");
const expressJwt        = require('express-jwt');

const bcrypt            = require('bcryptjs');
const User              = require('../models/Users');
const config            = require("../../config/config");

// TODO create
const create = (req, res) => {
    if(req.decoded){

    }else{
        res.status(204).send('No changes.').end();
    }
};
// TODO find
const find = (req, res) => {

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