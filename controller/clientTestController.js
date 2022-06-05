const clientTest = require('./../models/clientTestModel')
 exports.getTestimonials=async (req,res)=>{
    try{
        const clienttest = await clientTest.find();
        res
        .status(200)
        .json({
            status:'success',
            results:clienttest.length,
            data:{
                clienttest
            }
    
        });
    }catch(err){//catch block in case of exception
        res.send(404).json({
            message:err
        })
    }
};
exports.updateTestimonials =async (req, res) => {
    try{
      const clienttest =await clientTest.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
      })
     

    res.status(200).json({
      status: 'success',
      data: {
        clienttest
      }
    });
  }catch(err){
    res.status(404).json({
      status:'fail',
      message:err
    }); 
  }
  };

  exports.addClient =async (req,res)=>{
    // console.log(req.body)

    const newClient = await clientTest.create( req.body );
    // console.log(req.body);
     res.status(201).json({
         status:'success',
         
         data:{
          newClient
         }
         
     });
 };