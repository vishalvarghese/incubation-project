var express = require('express');
var router = express.Router();

const { postSignup, applicationsave, login, homepage } = require('../Controller/usercontroller/userController');
const check = require('../middleware/authjwt');

var user = require('../modal/userschema')

router.post('/signup', postSignup)

router.post('/login', login)


router.post('/applicationform', applicationsave)

router.post('/homepage',check,homepage)
module.exports = router;
