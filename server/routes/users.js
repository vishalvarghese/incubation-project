var express = require('express');
var router = express.Router();

const { postSignup, applicationsave, login } = require('../Controller/usercontroller/userController')

var user = require('../modal/userschema')

router.post('/signup', postSignup)

router.post('/login', login)

router.post('/applicationform', applicationsave)
module.exports = router;
