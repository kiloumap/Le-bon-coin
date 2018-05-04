"use strict";
// ******************* modules *******************
const express           = require('express');
const bodyParser        = require('body-parser');
const methodOverride    = require('method-override');
const morgan            = require('morgan');
const config            = require('./config/config');   // load db location to split test and dev database
const mongoose          = require('mongoose');
const cors              = require('cors');              // cross-origin resource sharing
const helperView        = require('./app/helpers/view');
const cookieSession     = require('cookie-session');
const cookieParser      = require('cookie-parser');

// ******************* routes *******************
const indexRouter       = require('./app/routes/index');

const app               = express();

// Create a server for socket.io.
const server = require('http').Server(app);
const io     = require('socket.io')(server);

// TODO check doc generate
// ******************* configuration *******************
// Connection to mongodb.
mongoose.connect(config.database, (err) => {
    if (err) throw err;
});
mongoose.Promise = global.Promise;
app.set('secretCode', config.secret);

// ******************* middlewares *******************
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json({ limit: '5mb' }));

// ******************* cookies *******************
app.use(cookieParser(config.secret));
app.use(cookieSession({
    name: 'session',
    keys: [config.secret],
    cookie: {
        httpOnly: true,
        signed: true,
        secure: true,
    }

}));

// ******************* routes *******************
// TODO link to generate doc
app.use('/api', indexRouter);

// Catch 404 Errors and forward them to error handler.
app.use((req, res, next) => {
    const err  = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Error handler functions.
app.use((err, req, res) => {
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

module.exports = app;