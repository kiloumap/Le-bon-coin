'use strict';

const Joi = require('joi');

/**
 * Validates a schema against the request's params.
 *
 * @param {obj} schema - The validation schema.
 * @param {string} name - The name of the variable to validate.
 * @returns {function(*, *, *)}
 */
function validateParam(schema, name) {
    return (req, res, next) => {
        const result = Joi.validate({ param: req.params[name] }, schema);

        if (result.error) {
            return res.status(400).json(result.error);
        } else {
            if (!req.value) {
                req.value = {};
            }

            if (!req.value.params) {
                req.value.params = {};
            }

            req.value.params[name] = result.value.param;

            next();
        }
    };
}

/**
 * Validates a schema against the request's body.
 *
 * @param schema
 * @returns {function(*, *, *)}
 */
function validateBody(schema) {
    return (req, res, next) => {
        const result = Joi.validate(req.body, schema);

        if (result.error) {
            return res.status(400).json(result.error);
        } else {
            if (!req.value) {
                req.value = {};
            }

            if (!req.value.body) {
                req.value.body = {};
            }

            req.value.body = result.value;

            next();
        }
    };
}

/**
 * Validates a schema against the request's body.
 *
 * @param schema
 * @returns {function(*, *, *)}
 */
function validateQuery(schema) {
    return (req, res, next) => {
        const result = Joi.validate(req.query, schema);

        if (result.error) {
            return res.status(400).json(result.error);
        } else {
            if (!req.value) {
                req.value = {};
            }

            if (!req.value.query) {
                req.value.query = {};
            }

            req.value.query = result.value;

            next();
        }
    };
}

/**
 * Validation schema for an id.
 *
 * @type {Iterator.<number>|Iterator.<K>|Iterator.<T>|Array|Chai.Assertion|*}
 */
const idSchema = Joi.object().keys({
    param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
});

const emailSchema = Joi.object().keys({
    param: Joi.string().email().required()
});

/**
 * Validation schema for an user.
 *
 * @type {Iterator.<number>|Iterator.<K>|Iterator.<T>|Array|Chai.Assertion|*}
 */
const userSchema    = Joi.object().keys({
    name            : Joi.string().required(),
    email           : Joi.string().email().required(),
    password        : Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required(),
    isAdmin         : Joi.bool().required(),
    isPro           : Joi.bool().required(),
});

/**
 * Validation schema for a partial pizza.
 *
 * @type {Iterator.<number>|Iterator.<K>|Iterator.<T>|Array|Chai.Assertion|*}
 */
const partialUserSchema = Joi.object().keys({
    name            : Joi.string(),
    email           : Joi.string(),
    password        : Joi.string(),
    isAdmin         : Joi.bool(),
    type            : Joi.bool()
});


/**
 * Validation schema for a article.
 *
 * @type {Iterator.<number>|Iterator.<K>|Iterator.<T>|Array|Chai.Assertion|*}
 */
const articleSchema    = Joi.object().keys({
    title           : Joi.string().alphanum().min(5).max(40).required(),
    description     : Joi.string().min(10).max(500).required(),
    price           : Joi.number().required(),
    image           : Joi.string().required(),
    localisation    : Joi.string().regex(/^[0-9]{5,5}$/).min(5).max(5).required(),
    user            : Joi.array().items(Joi.string().regex(/^[0-9a-fA-F]{24}$/)).required()
});

/**
 * Validation schema for a partial article.
 *
 * @type {Iterator.<number>|Iterator.<K>|Iterator.<T>|Array|Chai.Assertion|*}
 */
const partialArticleSchema = Joi.object().keys({
    title           : Joi.string(),
    description     : Joi.string(),
    price           : Joi.number(),
    image           : Joi.string(),
    localisation    : Joi.string(),
    user            : Joi.array()
});

module.exports = {
    validateParam,
    validateBody,
    validateQuery,
    schemas: {
        idSchema,
        emailSchema,
        userSchema,
        partialUserSchema,
        articleSchema,
        partialArticleSchema
    }
};