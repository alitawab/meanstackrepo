const express = require('express');
const router = express.Router();

const cartController = require('../controller/cart');

router.get('/get-cart',cartController.cart_get_all_cart);

router.get('/createcart', cartController.cart_create_cart);

router.get('/addtocart/:id', cartController.cart_add_to_cart);

router.get('/remove/:id' , cartController.cart_decrease_cart);

router.get('/delete/:id',cartController.cart_remove_cart);

module.exports = router;
