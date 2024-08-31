const express = require('express');
const router = express.Router();

const orderController = require('../controller/orders');


router.get('/' , orderController.orders_get_all);

router.get('/:orderId' , orderController.order_get_order);

router.post('/create' , orderController.order_create_order);

router.delete('/:orderId' ,orderController.order_delete_order);

module.exports = router;