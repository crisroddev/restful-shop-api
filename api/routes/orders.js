const express = require('express');
const router = express.Router();

router.get('/', (res, req, next) => {
    res.statusCode(200).json({
        message: 'Orders were fetched'
    });
}); 

router.post('/', (res, req, next) => {
    res.statusCode(200).json({
        message: 'Orders was created'
    });
});

router.get('/:orderId', (res, req, next) => {
    res.statusCode(200).json({
        message: 'Orders details',
        orderId: req.params.orderId
    });
}); 

router.delete('/:orderId', (res, req, next) => {
    res.statusCode(200).json({
        message: 'Orders deleted',
        orderId: req.params.orderId
    });
}); 

module.exports = router;

