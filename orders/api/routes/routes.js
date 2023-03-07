'use strict'

const controller = require('../controllers/controller');

function routes(app) {

    app.route('/orders')

        .get(controller.retrieveOrders);

    app.route('/distance')

        .post(controller.createOrder);

};

module.exports = routes;