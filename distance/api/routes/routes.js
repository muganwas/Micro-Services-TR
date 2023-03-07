'use strict'

const controller = require('../controllers/controller');

function routes(app) {

    app.route('/about')

        .get(controller.about);

    app.route('/distance')

        .get(controller.get_distance);

};

module.exports = routes;
