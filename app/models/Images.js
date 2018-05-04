'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Articles's model
 *
 * @namespace ImagesModels
 * @property {string} image - image's encoded.
 * @property {string} image.required - The property is required.
 * @property {article[]} articles - Category's articles.
 *
 */

const imageSchema = new Schema({
    image       : {
        type    : String,
        required: true,
    },
    article: [
    {
        type: Schema.Types.ObjectId,
        ref: 'article'
    }
]
}, {
    timestamps: true // createdAt and updatedAt fields.
});

const Image = mongoose.model('image', imageSchema);

module.exports = Image;