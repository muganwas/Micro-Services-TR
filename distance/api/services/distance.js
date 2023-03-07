require('dotenv').config();

const request = require('request');

const apiKey = process.env.ZIPCODE_API_KEY;

const zipCodeURL = 'https://www.zipcodeapi.com/rest/';

const distance = {

    find: function (req, res, next) {
        request(zipCodeURL + apiKey

            + '/distance.json/' + req.query.zipcode1 + '/'

            + req.query.zipcode2 + '/km',

            function (error, response, body) {

                if (!error && response.statusCode == 200) {

                    response = JSON.parse(body);

                    res.send(response);

                } else {

                    console.log(response.statusCode + response.body);

                    res.send({ distance: -1 });

                }

            });

    }

};

module.exports = distance;