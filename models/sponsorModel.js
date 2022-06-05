const mongoose = require('mongoose')
const sponsorSchema = new mongoose.Schema({
sponsorname :{
        type:String
},
sponsordetails :{
    type:String
},
logo :{
    type:String
},
sponsorshipbrochure:{
    type:String
}
});

//using schema
const Sponsors = mongoose.model('Sponsors',sponsorSchema);
module.exports=Sponsors;