const config = require('./config');
const setup = require('./setup');
const winston = require('winston');

let app = setup.createExpressApp(config);
let dbConn = setup.setupDBConnection(config);

setup.createRoutes(app, dbConn);
setup.handleExpressErrors(app);

app.listen(app.get('port'), () => {
    winston.debug(config.get('appname'), 'Node express server listening on: ' + app.get('port'));
});
