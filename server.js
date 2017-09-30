const app = require('./server/index');
const config = require( './server/config/config');

app.listen(config.port, () => {
    console.info(`server started on port ${config.port} (${config.env})`); // eslint-disable-line no-console
});
