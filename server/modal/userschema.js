const { text } = require('express');
const mongoose= require('mongoose');
var userschema =mongoose.Schema({
 name:String,
 email:String,
 password:String
});
var userone =mongoose.model("user",userschema)
module.exports=userone  