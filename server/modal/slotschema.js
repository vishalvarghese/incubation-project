const { text } = require('express');
const mongoose= require('mongoose');
var slotschema =mongoose.Schema({
 companyName:String,
 occupied:{type:String,default:"false"},
 slotName:String
});
var slotone =mongoose.model("slot",slotschema)
module.exports=slotone  