
const express = require('express')
const router = express.Router();

const {signUp} = require('../controllers/Signup');

router.post('/signup' , signUp);

module.exports = router;