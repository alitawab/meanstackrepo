const express = require('express');
const router = express.Router();
const jwt = require('express-jwt');
const config = require('../../config/db')

const userController = require('../controller/user');

let auth = jwt({
    secret: config.jwtSecret,
    userProperty: 'payload'
});

router.post('/signin' , userController.login);

router.post('/signup' , userController.signup);

router.get('/profile' , auth , userController.profileRead);

router.put('/password-reset' , userController.reset);

router.get('/activate/:token', userController.activation);



module.exports = router;