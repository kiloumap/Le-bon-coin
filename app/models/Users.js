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
 * @property {boolean} isPro - User's type, 1 ? pro : particular.
 * @property {boolean} isPro.required - This property is default false.
 *
 */

const userSchema = new Schema({
    email: {
        type    : String,
        required: true,
        unique  : true
    },
    name       : {
        type    : String,
        required: true,
        unique  : false
    },
    password      : {
        type    : String,
        required: true
    },
    isAdmin      : {
        type    : Boolean,
        required: true
    },
    isPro       : {
        type    : Boolean,
        default : false
    }
}, {
    timestamps: true // createdAt and updatedAt fields.
});

const User = mongoose.model('user', userSchema);

module.exports = User;