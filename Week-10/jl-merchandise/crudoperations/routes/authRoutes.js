// routes/authRoutes.js
const express = require('express');
const router = express.Router(); //   use .Router()
const {body}= require('express-validator');
const { login, register } = require('../controllers/authController');

//Login route with validations
router.post('/login',
    [
        body('email').isEmail().withMessage("Invalid email"),
        body('email').notEmpty().withMessage('Password is required')
    ],
    login);

///Register with validation
router.post('/register',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Invalid email'),
        body('password')
        .isLength({min:6})
        .withMessage('Password must be at least 6 characters')
    ]
    ,
    register);

module.exports = router;
