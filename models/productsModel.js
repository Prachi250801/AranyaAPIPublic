const mongoose = require('mongoose')
const productsSchema = new mongoose.Schema({
productname :{
        type:String
},
productdetails :{
    type:String
},
productimage :{
    type:String
},
productContactDetails:{
    type:String
}
});

//using schema
const Products = mongoose.model('Products',productsSchema);
module.exports=Products;