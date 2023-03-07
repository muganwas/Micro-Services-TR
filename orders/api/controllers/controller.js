'use strict';

function createOrder(req, res) {
    res.json({ message: "Order creation request" });
}

function retrieveOrder(req, res) {
    res.json({ message: "Order retrieval request" });
}

function retrieveOrders(req, res) {
    res.json({ message: "Orders retrieval request" });
}

module.exports = {
    createOrder,
    retrieveOrder,
    retrieveOrders
}