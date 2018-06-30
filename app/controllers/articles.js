'use strict';

const Article           = require('../models/Articles');
const ServerEvent       = require('./socket');
/**
 * Articles' controller.
 * @namespace ArticlesController
 */

/**
 * Create a article.
 *
 * @function article
 * @memberof ArticlesController
 * @param {Object} req - Request object.
 * @param {Article} req.body - Article's object to create.
 * @param {Object} res - Response object.
 * @returns {Promise.<void>} Call res.status() with a status code to say what happens and res.json() to send data if there is any.
 */
const create = (req, res) => {
    const article = new Article(req.value.body);
    article.users = req.decoded._id;
    const ret = Article.populate(article.save(), 'users');
    if(ret) res.status(201).send('Article created');
    else res.status(500).send('Error');
};

/**
 * Find an articles responding to the query by his id.
 *
 * @function find
 * @memberof ArticlesController
 * @param {Object} req - Request object.
 * @param {string} req.params.id - Article's ID to find.
 * @param {string} req.query.title - Article's name to query.
 * @param {string} req.query.description - Article's description to query.
 * @param {string} req.query.price - Article's price to query.
 * @param {string} req.query.image - Article's image to query.
 * @param {string} req.query.localisation - Article's localisation to query.
 * @param {Object} res - Response object.
 * @returns {Promise.<void>} Call res.status() with a status code to say what happens and res.json() to send data if there is any.
 */
const findByTitle = (req, res) => {
    Article.findOne({title : req.value.params.title}, null)
        .populate('user')
        .exec((err, article) => {
            if(err){
                res.send(err);
            } else {
                res.status(201).json(article);
            }
        })
};

/**
 * Find all articles responding to the query or one by his id.
 *
 * @function find
 * @memberof ArticlesController
 * @param {Object} req - Request object.
 * @param {string} req.params.id - Article's ID to find.
 * @param {string} req.query.title - Article's name to query.
 * @param {string} req.query.description - Article's description to query.
 * @param {string} req.query.price - Article's price to query.
 * @param {string} req.query.image - Article's image to query.
 * @param {string} req.query.localisation - Article's localisation to query.
 * @param {Object} res - Response object.
 * @returns {Promise.<void>} Call res.status() with a status code to say what happens and res.json() to send data if there is any.
 */
const find = (req, res) => {
    Article.find()
        .populate('user')
        .exec((err, articles) => {
            if(err){
                res.send(err);
            } else {
                res.json(articles);
            }
        })
};

/**
 * Update an article.
 *
 * @function update
 * @memberof ArticlesController
 * @param {Object} req - Request object.
 * @param {string} req.params.id - Article's ID to update.
 * @param {Partial<Article>} req.body - New values.
 * @param {Object} res - Response object.
 * @returns {Promise.<void>} Call res.status() with a status code to say what happens and res.json() to send data if there is any.
 */
const update = (req, res) => {
    Article.findByIdAndUpdate({_id: req.value.params.id} , req.body, { new: true },
        function (err, article){
            if(err)
                res.status(404).send('article not found');
            else{
                res.status(201).json('ArticleSaved');
                global.io.emit('ArticleSaved', article);
            }
        });

};

/**
 * Remove a article.
 *
 * @function remove
 * @memberof ArticlesController
 * @param {Object} req - Request object.
 * @param {string} req.params.id - Article's ID to update.
 * @param {Partial<Article>} req.body - New values.
 * @param {Object} res - Response object.
 * @returns {Promise.<void>} Call res.status() with a status code to say what happens and res.json() to send data if there is any.
 */
const remove = (req, res) => {
    const article = Article.findById({_id: req.params.id});
    const ret = Article.populate(article.remove(), 'user');
    if (ret) {
        res.status(200).json('ArticleDeleted');
        global.io.emit('ArticleDeleted', ret);
    } else {
        res.status(204).end();
    }
};

// Broadcast ArticleSaved for all users
ServerEvent.on('ArticleSaved', (data) => {
    io.sockets.emit('ArticleSaved', data);
});

// Broadcast ArticleCreated for all users
ServerEvent.on('ArticleCreated', (data) => {
    io.sockets.emit('ArticleCreated', data);
});

// Broadcast ArticleDeleted for all users
ServerEvent.on('ArticleDeleted', (data) => {
    io.sockets.emit('ArticleDeleted', data);
});



module.exports = {
    create,
    find,
    findByTitle,
    update,
    remove
};