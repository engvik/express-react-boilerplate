const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const winston = require('winston');

module.exports.createExpressApp = function(config) {
    const app = express();

    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.set('port', config.get('port'));

    app.use(function(req, res, next) {
        winston.debug(config.get('appname') + req.method, req.originalUrl);
        next();
    });

    return app;
};

module.exports.createRoutes = function(app) {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(path.join(__dirname, '../..', 'public')));
    app.use('/api', require('../routes/api'));
};

module.exports.handleExpressErrors = function(app) {
    app.use(function(req, res) {
        res.status(404);

        if (req.accepts('html')) {
            return res.send('404');
        }

        if (req.accepts('json')) {
            return res.send({error: 404});
        }

        res.type('txt').send('404');
    });

    app.use(function(err, req, res) {
        winston.debug(config.get('appname') + ':express-error', err.stack);
        res.status(500).send('Something broke!');
    });
};
