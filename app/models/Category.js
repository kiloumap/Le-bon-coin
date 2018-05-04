'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * SubCategory's model
 *
 * @namespace CategoryModels
 * @property {string} title - Category's title.
 * @property {string} title.required - The property is required.
 * @property {string} value - Category's value.
 * @property {string} value.required - The property is required.
 * @property {article[]} articles - Category's articles.
 * @property {field[]} fields - Category's fields.
 *
 */

const categorySchema = new Schema({
    title       : {
        type    : String,
        required: true,
    },
    value       : {
        type    : String,
        required: true,
    },
    article: [
        {
            type: Schema.Types.ObjectId,
            ref: 'article'
        }
    ],
    fields: [
        {
            type: Schema.Types.ObjectId,
            ref : 'field'
        }
    ]
}, {
    timestamps: true // createdAt and updatedAt fields.
});

const Category = mongoose.model('category', categorySchema);

module.exports = Category;