const util = require('util');
const convict = require('convict');
const winston = require('winston');

winston.level = 'debug';

const config = module.exports = convict({
    appname: 'express-react-boilerplate',
    env: {
        doc: 'The application environment.',
        format: ['production', 'development'],
        default: 'development',
        env: 'NODE_ENV'
    },
    port: {
        doc: 'The server port to bind.',
        format: 'port',
        default: 3000,
        env: 'PORT'
    },
    mysqlHost: {
        doc: 'MySQL Host',
        format: 'url',
        default: 'localhost',
        env: 'MYSQL_HOST'
    },
    mysqlUser: {
        doc: 'MySQL user',
        format: 'username',
        env: 'MYSQL_USER'
    },
    mysqlPassword: {
        doc: 'MySQL password',
        format: 'password',
        env: 'MYSQL_PASSWORD'
    },
    mysqlDatabase: {
        doc: 'MySQL database',
        format: 'datbase',
        env: 'MYSQL_DATABASE'
    }
});

config.validate();

winston.debug(config.get('appname') + ':configuration', util.inspect(process.env, {
    colors: true
}));
