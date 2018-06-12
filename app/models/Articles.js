'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Articles's model
 *
 * @namespace ArticlesModels
 * @property {string} title - Article's name.
 * @property {string} title.required - The property is required.
 * @property {string} description - Article's description.
 * @property {string} description.required - The property is required.
 * @property {boolean} isRequest - Article's type : true if is an offer, false if is an proposition.
 * @property {boolean} isRequest.required - The property is required.
 * @property {boolean} isRequest.default - The property's default is true.
 * @property {number} price - Article's price.
 * @property {number} price.required - The property is required.
 * @property {string} first_image - Article's image.
 * @property {string} first_image.required - The property is required.
 * @property {user[]} user - Article's author.
 * @property {User[]} user.required - The property is required.
 * @property {images[]} images - Article's images.
 * @property {fields[]} fields - Article's fields.
 *
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
    price       : {
        type    : Number,
        required: true
    },
    image        : {
        type    : String,
        required: true
    },
    localisation: {
        type    : String,
        required: true
    },
    user: [
        {
            type: Schema.Types.ObjectId,
            ref : 'user',
            required: true
        }
    ]
}, {
    timestamps: true // createdAt and updatedAt fields.
});

const Article = mongoose.model('article', articleSchema);

module.exports = Article;