const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');

router.get('/', productController.product_list);
router.get('/:id', productController.product_detail);
router.post('/', productController.product_create);

module.exports = router;