'use strict';

const { ordersProxy, productsProxy, distanceProxy } = require("../controllers/controller");

function routes(app) {
    app.get('/', (req, res) => res.send('Hello Gateway API'));
    app.get('/orders', ordersProxy);
    app.get('/products', productsProxy);
    app.get('/distance', distanceProxy);
}

module.exports = routes;