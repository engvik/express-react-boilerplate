const config = require('./config');
const setup = require('./setup');
const winston = require('winston');

let app = setup.createExpressApp(config);

setup.setupDBConnection(app, config);
setup.createRoutes(app);
setup.handleExpressErrors(app);

app.listen(app.get('port'), function() {
    winston.debug(config.get('appname'), 'Node express server listening on: ' + app.get('port'));
});
