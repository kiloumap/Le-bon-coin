'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * SubCategory's model
 *
 * @namespace SubCategoryModels
 * @property {string} subCategory - SubCategory's title.
 * @property {string} subCategory.required - The property is required.
 * @property {string} subCategory - SubCategory's value.
 * @property {string} subCategory.required - The property is required.
 * @property {field[]} articles - Category's articles.
 * @property {field[]} fields - Category's fields.
 *
 */

const subCategorySchema = new Schema({
    title       : {
        type    : String,
        required: true,
    },
    value       : {
        type    : String,
        required: true,
    },
    Article: [
        {
            type: Schema.Types.ObjectId,
            ref: 'article'
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

const SubCategory = mongoose.model('subCategory', subCategorySchema);

module.exports = SubCategory;