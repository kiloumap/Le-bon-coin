'use strict';

const jwt               = require("jsonwebtoken");
const expressJwt        = require('express-jwt');

const bcrypt            = require('bcryptjs');
const User              = require('../models/Users');
const config            = require("../../config/config");


/**
 * Users's controller.
 * @namespace UsersController
 */
// TODO create check doc generate
/**
 *
 * Find all Users responding to the query or one by his email.
 *
 * @function create
 * @memberof UsersController
 * @param {Object} req - Request object.
 * @param {string} req.params.id - User's ID to sign.
 * @param {string} req.query.name - User's name to query.
 * @param {string} req.query.email - User's email to query.
 * @param {string} req.query.password - User's password to query.
 * @param {string} req.query.isAdmin - User's admin to query.
 * @param {string} req.query.type - User's type to query.
 * @param {Object} res - Response object.
 * @returns {Object} Call res.status() with a status code to say what happens and res.json() to send data if there is any.
 */
const create = (req, res) => {
    if(req.body){
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const isAdmin = !!(req.body.isAdmin);
        // create a token
        const token = jwt.sign({email: req.body.email, name: req.body.name, isAdmin: req.body.isAdmin }, config.secret, { // TODO config.secret to dev / test
            expiresIn: 86400 // expires in 24 hours
        });
        User.create({
            name        : req.body.name,
            email       : req.body.email,
            password    : hashedPassword,
            isAdmin     : isAdmin,
            isPro       : req.body.isPro
        },
            function (err) {
                if (err) {
                    if (err.code === 11000)
                        return res.status(200).send("User's mail already exists, you will be redirect to login."); // TODO redirect to login
                    else
                        return res.status(500).send("There was a problem registering the user.");
                }
                req.session.name = 'jwt';
                req.session.value= token;
                res.status(200).send({ auth: true, token: token, isAuth: true });
        });
    }else
        res.status(204).end();
};

// TODO find check doc generate
const find = (req, res) => {
    // If already has token, that mean a check was already did.
    if(req.session.name === 'jwt')
        res.status(200).send({ auth: true, token: process.env.token, isAuth: true });

    // Else if hasn't token, we need to check it.
    else if(req.body){
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) return res.status(500).send('Error on the server.');
            if (!user) return res.status(404).send('No user found.');
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null, message: 'Failed to authenticate token.' });
            const token = jwt.sign({ email: req.body.email, name: req.body.name, isAdmin: req.body.isAdmin }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            req.session.name = 'jwt';
            req.session.value= token;
            res.status(200).send({ auth: true, token: token, isAuth: true });
        });
    }else
        res.status(204).end();
};

// TODO update check doc generate
const update = (req, res) => {
    if(req.body){
        if(req.session.name !== 'jwt') return res.status(200).send('You must be logged'); //TODO redirect to login
        const currentUser = jwt.verify(req.session.value, config.secret);
        const login = currentUser.email;
        const values = req.body;
        if(values.password)
            values.password = bcrypt.hashSync(req.body.password, 8);
        User.findOneAndUpdate(  {email: login.email},
                                {$set: values},
                                { new: true },
            function (err, user){
                if (err) return res.status(500).send('Error on the server.');
                if (!user) return res.status(404).send('No user found.');
                const token = jwt.sign({ email: user.email, name: user.name, isAdmin: user.isAdmin }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                req.session.name = 'jwt';
                req.session.value= token;
                res.status(200).send('Modifications saved.');
            });
    }else
        res.status(204).send('No changes.').end();
};

// TODO remove check doc generate
const remove = (req, res) => {
    if(req.session.name !== 'jwt') return res.status(200).send('You must be logged'); //TODO redirect to login
    if(req.body){
        User.deleteOne({email: req.body.email}, function(err, user){
            if(err) return res.status(500).send('Error on the server.');
            if(!user) return res.status(404).send('No user found.');
            if(req.session) req.session = null;
            res.status(200).send('User deleted, bye bye.');
        });

    }else
        res.status(204).send('No changes.').end();
};

module.exports = {
    create,
    find,
    update,
    remove
};