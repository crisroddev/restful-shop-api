const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const checkAuth = require('../middleware/check-auth');
const OrdersControllers = Require('../controllers/orders');

//Handle incoming GET requests to /orders
router.get("/", checkAuth, OrdersControllers.orders_get_all);

// Handling post requests create orders
router.post("/", chackAuth, OrdersControllers.orders.create_order);

//Hadling GET requests by orderID
router.get("/:orderId", checkAuth, OrdersControllers.orders.get_order);

// Handling delete requests, delete order
router.delete("/:orderId", checkAuth, OrdersControllers.orders_delete);

module.exports = router;