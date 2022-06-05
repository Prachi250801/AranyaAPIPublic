const mongoose = require('mongoose')
const teamSchema = new mongoose.Schema({
name:{
    type:String
},
img:{
    type:String
},
linkedin:{
    type:String
},
designation:{
    type:String
}

});

//using schema
const Team = mongoose.model('Team',teamSchema);
module.exports=Team;