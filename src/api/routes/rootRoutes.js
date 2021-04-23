const express = require('express');
const router = express.Router();
const passport = require('passport');
const registerController = require('../controller/registerController');


router.post('/register', registerController.register);
router.post('/login', registerController.login)

module.exports = router;