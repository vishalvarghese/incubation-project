var express = require('express');
var router = express.Router();

/* GET users listing. */


router.post('/adminlogin',(req,res)=>{
  let data= req.body
  console.log(data);
})
module.exports = router;
