const { text } = require('express');
const mongoose= require('mongoose');
var applicationschema =mongoose.Schema({
    name:String,
    Address:String,
    City:String,
    Phonenumber:Number,
    Email:String,
    businessDetail:String,
    status:{type:String,default:"pending"}
 
});
var applicationone =mongoose.model("application",applicationschema)
module.exports=applicationone  