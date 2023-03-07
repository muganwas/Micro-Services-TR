'use strict'

const controller = require('../controllers/controller');

function routes(app) {

    app.route('/products')

        .get(controller.retrieveProducts);

    app.route('/product')

        .post(controller.createProduct);

};

module.exports = routes;