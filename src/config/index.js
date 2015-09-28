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
    mongoUrl: {
        doc: 'MongoDB URL',
        format: 'url',
        default: 'localhost',
        env: 'MONGO_URL'
    },
    mongoPort: {
        doc: 'MongoDB port',
        format: 'port',
        default: 27017,
        env: 'MONGO_PORT'
    }
});

config.validate();

winston.debug(config.get('appname') + ':configuration', util.inspect(process.env, {
    colors: true
}));
