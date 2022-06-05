const mongoose = require('mongoose')
const aboutUsSchema = new mongoose.Schema({
Slogan :{
        type:String
},
OurMotive :{
    type:String
},
OurAdvantage :{
    type:String
},
Customers:{
    type:String
},
logo:{
    type:String
}
});


const About = mongoose.model('About',aboutUsSchema);
module.exports=About;