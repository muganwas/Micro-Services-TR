'use strict';

const { createProxyMiddleware } = require('http-proxy-middleware');

const {
    ORDERS_API_URL,
    PRODUCTS_API_URL,
    DISTANCE_API_URL
} = require('../../URLs');

const optionsDistance = {
    target: DISTANCE_API_URL,
    changeOrigin: true,
    logger: console,
};

const optionsProducts = {
    target: PRODUCTS_API_URL,
    changeOrigin: true,
    logger: console,
};

const optionsOrders = {
    target: ORDERS_API_URL,
    changeOrigin: true,
    logger: console,
};

const productsProxy = createProxyMiddleware(optionsProducts);
const ordersProxy = createProxyMiddleware(optionsOrders);
const distanceProxy = createProxyMiddleware(optionsDistance);

module.exports = {
    productsProxy,
    ordersProxy,
    distanceProxy
}