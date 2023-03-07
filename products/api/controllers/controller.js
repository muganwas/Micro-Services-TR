'use strict';

function createProduct(req, res) {
    res.json({ message: "Product creation request" });
}

function retrieveProduct(req, res) {
    res.json({ message: "Product retrieval request" });
}

function retrieveProducts(req, res) {
    res.json({ message: "Products retrieval request" });
}

module.exports = {
    createProduct,
    retrieveProduct,
    retrieveProducts
}