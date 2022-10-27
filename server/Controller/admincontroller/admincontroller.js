const app=require('../../app');
const { findOne } = require('../../modal/applicationSchema');

const applicationdetail=require('../../modal/applicationSchema')

const postadminlogin= async(req,res)=>{
try{

}catch(error){
    console.log(error.message);
}    
}

const allApplications= async (req,res)=>{
    const data= await applicationdetail.find({ status: 'pending' });
    // console.log(data);   
    res.json(data)  
 }
 const approveApplication= async(req,res)=>{
    console.log(req.params.id);
    console.log('heloooooooooooooooooooooooooooooooooooooooooooooooooooooo');
   await applicationdetail.findByIdAndUpdate(req.params.id, { status: 'Approved' },
     function (err, docs) {
    if (err){
        console.log(err)
        return  res.json({msg:"Not updated"})
    }
    else{
        console.log("Updated application status  ");
        return  res.json({msg:"updated status"})
    }
}).clone() 
}
const rejectApplication= async(req,res)=>{
    console.log(req.params.id);
    console.log('heloooooooooooooooooooooooooooooooooooooooooooooooooooooo');
   await applicationdetail.findByIdAndUpdate(req.params.id, { status: 'Rejected' },
     function (err, docs) {
    if (err){
        console.log(err)
        return  res.json({msg:"Not updated"})
    }
    else{
        console.log("Updated application status  ");
        return  res.json({msg:"updated status"})
    }
}).clone() 
}

const approvelist= async(req,res)=>{
   await applicationdetail.find({ status: 'Approved'}, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log("approvelist taken from db: ", docs);
            console.log(docs);   
            res.json(docs)
        }
    }).clone()
    // const data= await applicationdetail.find({});
    
}
const rejectlist= async(req,res)=>{
    await applicationdetail.find({ status: 'Rejected'}, function (err, docs) {
         if (err){
             console.log(err);
         }
         else{
             console.log("approvelist taken from db: ", docs);
             console.log(docs);   
             res.json(docs)
         }
     }).clone();
     // const data= await applicationdetail.find({});
     
 }

module.exports={allApplications,approveApplication,rejectApplication,approvelist,rejectlist}