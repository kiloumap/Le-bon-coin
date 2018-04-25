'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Articles's model
 *
 * @namespace ArticlesModels
 * @property {string} name - Article's name.
 * @property {string} name.required - The property is required.
 * @property {string} name.unique - The property is unique.
 * @property {string} description - Article's description.
 * @property {string} description.required - The property is required.
 * @property {string} price - Article's price.
 * @property {string} price.required - The property is required.
 * @property {string} image - Article's image.
 * @property {string} image.required - The property is required.
 * @property {Ingredient[]} ingredients - Article's ingredients.
 */

const articleSchema = new Schema({
    title       : {
        type    : String,
        required: true,
        unique  : true
    },
    description: {
        type    : String,
        required: true
    },
    isRequest  : {
        type    : Boolean,
        required: true,
        default : true
    },
    price       : {
        type    : String,
        required: true
    },
    first_image : {
        type    : String,
        required: true
    },
    localisation: {
        type    : String,
        required: true
    },
    User: [
        {
            type    : Schema.Types.ObjectId,
            ref     : 'user'
        }
    ],
    Images: [
        {
            type: Schema.Types.ObjectId,
            ref : 'image'
        }
    ],
    Fields: [
        {
            type: Schema.Types.ObjectId,
            ref : 'field'
        }
    ]
}, {
    timestamps: true // createdAt and updatedAt fields.
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;