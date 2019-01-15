const express = require('express');
const app = express();
const ordersRoutes = require('./api/routes/orders');
const productRoutes = require('./api/routes/products');

app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

module.exports = app;