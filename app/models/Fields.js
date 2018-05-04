'use strict';

const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

/**
 * Fields's model
 *
 * @namespace FieldsModels
 * @property {string} fields - field's title.
 * @property {string} fields.required - The property is required.
 * @property {string} fields - field's value.
 * @property {string} fields.required - The property is required.
 *
 */

const fieldSchema = new Schema({
    title       : {
        type    : String,
        required: true,
    },
    value       : {
        type    : String,
        required: true,
    }
}, {
    timestamps: true // createdAt and updatedAt fields.
});

const Field = mongoose.model('field', fieldSchema);

module.exports = Field;