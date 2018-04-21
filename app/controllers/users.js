'use strict';

import * as jwt from "jsonwebtoken";

const Pizza = require('../models/Users');


/**
 * Users's controller.
 * @namespace UsersController
 */
// TODO check commentary
/**
 * Find all Users responding to the query or one by his id.
 *
 * @function find
 * @memberof UsersController
 * @param {Object} req - Request object.
 * @param {string} req.params.id - Pizza's ID to find.
 * @param {string} req.query.name - Pizza's name to query.
 * @param {string} req.query.description - Pizza's description to query.
 * @param {string} req.query.price - Pizza's price to query.
 * @param {string} req.query.image - Pizza's image to query.
 * @param {Object} res - Response object.
 * @returns {Promise.<void>} Call res.status() with a status code to say what happens and res.json() to send data if there is any.
 */
async function find(req, res) {
    if (err) throw err;

    const name = req.value
        ? (req.value.params
            ? req.value.params.id
            : null)
        : null;

    let request;

    if (!name) {
        request = req.value.query;
        for (let properties in request) {
            request[properties] = new RegExp(`^.*${request[properties]}.*$`, 'i');
        }
    }

    const ret = name
        ? await User.findById(id).populate('ingredients')
        : await User.find(!id ? request : {}).populate('ingredients');

    if (ret) {
        res.status(200).json(ret);
    } else {
        res.status(204).end();
    }
}

async function findOne(req, res) {
    if (err) throw err;
    let HasToken = false;
        if (req.value.token())
            HasToken = checkToken(req.value.token);

        const ret = (HasToken) ? await User.findBy

    i
}

// find the user
User.findOne({
    name: req.body.name
}, function(err, user) {


    if (!user) {
        res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if (user) {

        // check if password matches
        if (user.password !== req.body.password) {
            res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        } else {

            // if user is found and password is right
            // create a token with only our given payload
            // we don't want to pass in the entire user since that has the password
            const payload = {
                isAdmin: user.isAdmin
            };
            var token = jwt.sign(payload, app.get('secretCode'), {
                expiresIn: 1440 // expires in 24 hours
            });

            // return the information including token as JSON
            res.json({
                success: true,
                token: token
            });
        }

    }
});



const checkToken = (req, res, next) => {
    // check header or url parameters or post parameters for token
    const token = req.body.token || req.query.token || req.headers['x-access-token'];

    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, app.get('secretCode'), function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {

        // if there is no token
        // return an error
        return res.status(403).send({
            success: false,
            message: 'No token provided.'
        });

    }
};
