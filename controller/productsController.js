const Products = require('./../models/productsModel')
 exports.getproducts=async (req,res)=>{
    try{
        const products = await Products.find();
        res
        .status(200)
        .json({
            status:'success',
            results:products.length,
            data:{
                products
            }
    
        });
    }catch(err){//catch block in case of exception
        res.send(404).json({
            message:err
        })
    }
};
exports.updateproducts =async (req, res) => {
    try{
      const products =await Products.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
      })
      console.log(req.params.id);
      console.log(req.body);
      console.log(about);

    res.status(200).json({
      status: 'success',
      data: {
        products
      }
    });
  }catch(err){
    res.status(404).json({
      status:'fail',
      message:err
    }); 
  }
  };
  