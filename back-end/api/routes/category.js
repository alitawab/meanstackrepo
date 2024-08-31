const express = require('express');
const router = express.Router();

 
const categoryController = require('../controller/category');

router.get('/',categoryController.category_get_all_category);

router.get('/image/:categoryId', categoryController.category_get_image);


router.get('/:categoryid', (req , res , next) => {
});

router.post('/addcategory', categoryController.category_add_category);




module.exports = router;