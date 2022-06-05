const mongoose = require('mongoose')
const servicesSchema = new mongoose.Schema({
ourservices:{
    type:String
},
image:{
    type:String

}
});

//using schema
const Services = mongoose.model('Services',servicesSchema);
module.exports=Services;