'use strict';

const jwt               = require("jsonwebtoken");

const bcrypt            = require('bcryptjs');
const User              = require('../models/Users');
const config            = require("../../config/config");


/**
 * Users's controller.
 * @namespace UsersController
 */
/**
 *
 * Create Users with all datas to the query.
 *
 * @function create
 * @memberof UsersController
 * @param {Object} req - Request object.
 * @param {string} req.params.id - User's ID to sign.
 * @param {string} req.query.name - User's name to query.
 * @param {string} req.query.email - User's email to query.
 * @param {string} req.query.password - User's password to query.
 * @param {string} req.query.isAdmin - User's admin to query.
 * @param {string} req.query.isPro - User's type to query.
 * @param {Object} res - Response object.
 * @returns {Object} return res.status() with a status code to say what happens and res.json() to send data if there is any.
 */
const create = (req, res) => {
    if(req.body){
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const isAdmin = !!(req.body.isAdmin);

        User.create({
            name        : req.body.name,
            email       : req.body.email,
            password    : hashedPassword,
            isAdmin     : isAdmin,
            isPro       : req.body.isPro
        },  function (err) {
                if (err) {
                    console.log(err);
                    if (err.code === 11000)
                        return res.status(200).send("User's mail already exists, you will be redirect to login."); // TODO redirect to login
                    else
                        return res.status(500).send("There was a problem registering the user.");
                }
                const token = setToken(req.body);
                req.session = { name: "session", value: token };
                res.status(200).send({ token: token, isAuth: true });
        });
    }else return res.status(204).end();
};

/**
 *
 * Find User by his email or with his token.
 *
 * @function create
 * @memberof UsersController
 * @param {Object} req - Request object.
 * @param {string} req.query.email - User's email to query.
 * @param {string} req.query.token - User's token to query.
 * @param {Object} res - Response object.
 * @returns {Object} return res.status() with a status code to say what happens and res.json() to send data if there is any.
 */
const find = (req, res) => {
    jwt.verify(req.session.value, config.secret,function(err,user){
        // if err we try to create a new token if user exists.
        if(err){
            if(req.body){
                User.findOne({ email: req.body.email }, function (err, user) {
                    if (err) return res.status(500).send('Error on the server.'); // If server has crashed
                    if (!user) return res.status(404).send('No user found.'); // If user doesn't exist
                    const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                    if (!passwordIsValid) return res.status(401).send({ auth: false, message: 'Failed to authenticate token.' });
                    req.session = {
                        name: "session",
                        value: setToken(user)
                    };
                    return res.status(200).send({ user: req.decoded, isAuth: true });
                });
            }else res.status(500).end();
            // Else send token and auth user
        }else return res.status(200).send({ user: req.decoded, isAuth: true });
    });
};

// TODO update check doc generate
const update = (req, res) => {
    if(req.body && req.decoded.email){
        const values = req.body;
        if(values.password) values.password = bcrypt.hashSync(req.body.password, 8);
        User.findOneAndUpdate(  {email: req.decoded.email},
                                {$set: values},
                                { new: true },
            function (err, user){
                if (err) return res.status(500).send('Error on the server.');
                if (!user) return res.status(404).send('No user found.');
                const token = setToken(user);
                req.session = {
                    name: "session",
                    value: token
                };
                res.status(200).send('Modifications saved.');
            });
    }else
        res.status(204).send('No changes.').end();
};

// TODO remove check doc generate
const remove = (req, res) => {
    if(req.decoded.email){
        User.deleteOne({email: req.decoded.email}, function(err, user){
            if(err) return res.status(500).send('Error on the server.');
            if(!user) return res.status(404).send('No user found.');
            if(req.session) req.session = null;
            res.status(200).send('User deleted, bye bye.');
        });

    }else
        res.status(204).send('No changes.').end();
};

const setToken = (user) => {
    return jwt.sign({ _id: user._id, email: user.email, name: user.name, isAdmin: user.isAdmin
    }, config.secret, {
        expiresIn: "24h", // expires in 24 hours
        algorithm: "HS384",
    });
};

module.exports = {
    create,
    find,
    update,
    remove
};