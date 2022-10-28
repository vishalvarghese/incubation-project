var express = require('express');
const { postadminlogin,slotbooking,allApplications,approveApplication,rejectApplication,approvelist,rejectlist,progressdetails, slotdetail} = require('../Controller/admincontroller/admincontroller');
var router = express.Router();

/* GET users listing. */


router.post('/adminlogin',postadminlogin)

router.get('/admindashboard',allApplications)
router.get('/approvelist',approvelist)
router.get('/rejectlist',rejectlist)
router.get('/progressbar',progressdetails)
router.get('/slots',slotdetail)

router.post('/approveApplication/:id',approveApplication)
router.post('/rejectApplication/:id',rejectApplication)
router.post('/slotbooking',slotbooking)

module.exports = router;
