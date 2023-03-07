require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./api/routes/routes');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());
routes(app);
app.listen(port, function () {
    console.log('Server started on port: ' + port);
});