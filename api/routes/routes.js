'use strict'

const controller = require('../controllers/controller');

module.exports = function (app) {

    app.route('/about')

        .get(controller.about);

    app.route('/distance')

        .get(controller.get_distance);

};
