import app from './server/config/express';
import config from './server/config/config';

app.listen(config.port, () => {
    console.log(`server success run at port ${config.port}`);
    console.info(`server started on port ${config.port} (${config.env}).......`); // eslint-disable-line no-console
});
