const mongoose = require('mongoose')
const contactSchema = new mongoose.Schema({
Name :{
        type:String
},
Position :{
    type:String
},
Address :{
    type:String
},
voicecall:{
    type:String
},
whatsapp:{
    type:String
},
emailid:{
    type:String
},
insta:{
    type:String
},
linkedin:{
    type:String
},
logo:{
    type:String
}

});

//using schema
const Contact = mongoose.model('Contact',contactSchema);
module.exports=Contact;