const mongoose = require('mongoose')
const clientTestSchema = new mongoose.Schema({
ClientName:{
    type:String
},
Photo:{
    type:String
},
testimonisl:{
    type:String
}

});

//using schema
const ClientTest = mongoose.model('ClientTest',clientTestSchema);
module.exports=ClientTest;