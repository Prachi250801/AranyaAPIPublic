const mongoose = require('mongoose')
const employmentSchema = new mongoose.Schema({
opportunities:{
    type:String
},
description:{
    type:String
},
image:{
    type:String
}

});

//using schema
const Employment = mongoose.model('Employment',employmentSchema);
module.exports=Employment;