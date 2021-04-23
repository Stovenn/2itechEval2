const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.get('/', userController.user_list);
router.get('/:id', userController.user_detail);
router.post('/', userController.user_create);
router.post('/login', userController.user_login);
router.put('/', userController.user_update);
router.get('/productsList', userController.user_products)


module.exports = router;