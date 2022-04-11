const express = require('express');
const bodyParser = require('body-parser');
const config = require('config');

module.exports = () => {
    const app = express();

    app.use(bodyParser.json());

    app.set('port', process.env.PORT || config.get('server.port'));

    require('../src/api/routes/paymentSlip')(app);

    return app;
}