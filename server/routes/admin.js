var express = require('express');
const { allApplications,approveApplication,rejectApplication,approvelist,rejectlist} = require('../Controller/admincontroller/admincontroller');
var router = express.Router();

/* GET users listing. */


router.post('/adminlogin',(req,res)=>{
  let data= req.body
  console.log(data);
})

router.get('/admindashboard',allApplications)
router.get('/approvelist',approvelist)
router.get('/rejectlist',rejectlist)

router.post('/approveApplication/:id',approveApplication)
router.post('/rejectApplication/:id',rejectApplication)

module.exports = router;
