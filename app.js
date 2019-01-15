const express = require('express');
const app = express();
const ordersRoutes = require('./api/routes/orders');
const productRoutes = require('./api/routes/products');
const morgan = require('morgan');

app.use(morgan('dev'));


app.use('/products', productRoutes);
app.use('/orders', ordersRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(eror.status || 500);
    res.json({
        error: {
            message: error.message
        }
     });
});

module.exports = app;