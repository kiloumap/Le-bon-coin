'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Users's model
 *
 * @namespace UsersModel
 * @property {string} name - User's name.
 * @property {string} name.required - This property is required.
 * @property {string} email - User's email.
 * @property {string} email.required - This property is required.
 * @property {string} email.unique - This property is unique.
 * @property {string} password - User's login.
 * @property {string} password.required - This property is required.
 * @property {boolean} isAdmin - is an admin ?.
 * @property {boolean} isAdmin.required - This property is required.
 * @property {boolean} type - User's type, 1 ? pro : particular.
 * @property {boolean} type.required - This property is required.
 *
 */

const userSchema = new Schema({
    name       : {
        type    : String,
        required: true,
        unique  : true
    },
    email: {
        type    : String,
        required: true
    },
    password      : {
        type    : String,
        required: true
    },
    isAdmin      : {
        type    : Boolean,
        required: true
    },
    type      : {
        type    : String,
        required: true
    },
    access_token: {
        type    : String,
        required: false
    }
}, {
    timestamps: true // createdAt and updatedAt fields.
});

const User = mongoose.model('user', userSchema);

module.exports = User;