"use strict";
// ******************* modules *******************
const express           = require('express');
const bodyParser        = require('body-parser');
const methodOverride    = require('method-override');
const morgan            = require('morgan');
const config            = require('./config/config');   // load db location to split test and dev database
const mongoose          = require('mongoose');
const cors              = require('cors');              // cross-origin resource sharing


// ******************* routes *******************
const users             = require('./app/routes/Users');

const app               = express();

// Create a server for socket.io.
const server = require('http').Server(app);
const io     = require('socket.io')(server);


// ******************* configuration *******************
// Connection to mongodb.
mongoose.connect(config.DBHost, { useMongoClient: true }, (err) => {
    if (err) throw err;
});
app.set('secretCode', config.secret);
mongoose.Promise = global.Promise;



// ******************* middlewares *******************
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '5mb' }));

// ******************* routes *******************
// TODO link to generate doc
app.use('/', function(req, res) {
    res.send('Hello! The API is at http://localhost:' + port + '/api');
});
app.use('/api/users', users);


// Catch 404 Errors and forward them to error handler.
app.use((req, res, next) => {
    const err  = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler functions.
app.use((err, req, res, next) => {
    const error  = app.get('env') === 'development' ? err : {};
    const status = err.status || 500;

    // Respond to client.
    res.status(status)
        .json({
            error: {
                message: error.message
            }
        });

    // Respond to ourselves.
    console.error(err);
});

// Start the server.
server.listen(helperView.port,
    () => console.log(`Server is listening on port ${helperView.port}`));

// Allow to use io in controllers files.
global.io = io;

// parse application/vnd.api+json as json.
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT.
app.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users.
app.use(express.static(__dirname + '/public'));

console.log('server running at ' + port);

exports = module.exports = app;