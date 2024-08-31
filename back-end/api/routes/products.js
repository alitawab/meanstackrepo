const express = require('express');
const router = express.Router();
const multer = require('multer');
const fs = require('fs');

const productController = require('../controller/products');


router.get('/', productController.products_get_all);

router.get('/search/:searchterm', productController.products_search_product);

router.get('/image/:productId', productController.products_get_image);

router.get('/specialoffer', productController.products_special_product);

router.get('/randomproducts', productController.product_random_products);

router.get('/allimages/number/:productId', productController.products_get_numberimages);

router.get('/allimages/:productId&:number', productController.products_get_allimages);

router.get('/:productId', productController.products_get_product);

router.delete('/:productId', productController.products_delete_product);

router.patch("/:productId", productController.products_update_product);

module.exports = router; 