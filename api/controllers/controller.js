'use strict';

const properties = require('../../package.json');
const distance = require("../services/distance");

function about(req, res) {
    var aboutInfo = { name: properties.name, version: properties.version }
    res.json(aboutInfo);
}

function get_distance(req, res) {
    distance.find(req, res, function (err, dist) {
        if (err) res.send(err); res.json(dist);
    });
}

module.exports = {
    about,
    get_distance
};