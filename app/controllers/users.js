'use strict';

const jwt               = require("jsonwebtoken");
const bcrypt            = require('bcryptjs');
const User              = require('../models/Users');
const config            = require("../../config/config");


/**
 * Users's controller.
 * @namespace UsersController
 */
// TODO check doc generate
/**
 * Find all Users responding to the query or one by his id.
 *
 * @function register
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
const register = (req, res) =>{
    //if(req.body){
        const hashedPassword = bcrypt.hashSync(req.body.password, 8);
        const isAdmin = !!(req.body.isAdmin);

        let user = ({
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword,
            isAdmin: isAdmin,
            type: req.body.name
        });

        const token = jwt.sign(user, config.secret, { // TODO config.secret to dev / test
            expiresIn: 86400 // expires in 24 hours
        });

        user.push({token: token});

        User.create(user);

        res.status(200).send({auth: true, token: token});
        /*
        User.create({
            name : req.body.name,
            email : req.body.email,
            password : hashedPassword,
            isAdmin: isAdmin,
            type: req.body.name
        },

        function (err, user) {
            if (err) return res.status(500).send("There was a problem registering the user.");
            // create a token
            const token = jwt.sign(user, config.secret, { // TODO config.secret to dev / test
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });*/
    //}else
        //res.status(204).end();
};

const login = (req, res) => {
    if(req.body){
        User.findOne({ email: req.body.email }, function (err, user) {
            if (err) return res.status(500).send('Error on the server.');
            if (!user) return res.status(404).send('No user found.');
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
            if (!passwordIsValid) return res.status(401).send({ auth: false, token: null, message: 'Failed to authenticate token.' });
            const token = jwt.sign({ id: user._id }, config.secret, {
                expiresIn: 86400 // expires in 24 hours
            });
            res.status(200).send({ auth: true, token: token });
        });
    }else
        res.status(204).end();
};

module.exports = {
    register,
    login,
    //update,
    //remove
};