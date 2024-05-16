
const express = require('express')
const router = express.Router();

const {signUp} = require('../controllers/Auth');
const {login} = require('../controllers/Auth');

router.post('/signup' , signUp);
router.post('/login' , login);

module.exports = router;