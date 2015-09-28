const bodyParser = require('body-parser');
const express = require('express');
const mysql = require('mysql');
const path = require('path');
const winston = require('winston');

module.exports.createExpressApp = (config) => {
    const app = express();

    app.use(express.static(path.join(__dirname, '..', 'public')));
    app.set('port', config.get('port'));

    app.use((req, res, next) => {
        winston.debug(config.get('appname') + req.method, req.originalUrl);
        next();
    });

    return app;
};

module.exports.setupDBConnection = (config) => {
    const connection = mysql.createConnection({
        host: config.get('mysqlHost'),
        user: config.get('mysqlUser'),
        password: config.get('mysqlPassword'),
        database: config.get('mysqlDatabase')
    });

    connection.connect((err) => {
        if (err) {
            return winston.debug(config.get('appname'), 'MySQL: ' + err);
        }

        winston.debug(config.get('appname'), 'MySQL: ' + config.get('mysqlHost') + '/' + config.get('mysqlDatabase'));
    });

    return connection;
}

module.exports.createRoutes = (app, db) => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(express.static(path.join(__dirname, '../..', 'public')));
    app.use('/api', require('../routes/api'));
};

module.exports.handleExpressErrors = (app) => {
    app.use((req, res) => {
        res.status(404);

        if (req.accepts('html')) {
            return res.send('404');
        }

        if (req.accepts('json')) {
            return res.send({error: 404});
        }

        res.type('txt').send('404');
    });

    app.use((err, req, res) => {
        winston.debug(config.get('appname'), 'Express:' + err.stack);
        res.status(500).send('Something broke!');
    });
};
