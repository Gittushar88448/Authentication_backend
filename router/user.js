// importing the express
const express = require('express')
const router = express.Router();

// importing the sign up function from controller
const {signUp} = require('../controllers/Auth');

// importing the login function from controller
const {login} = require('../controllers/Auth');

// post router request
router.post('/signup' , signUp);
router.post('/login' , login);

module.exports = router;