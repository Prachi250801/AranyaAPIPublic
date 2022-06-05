const Services = require('./../models/servicesModel')
 exports.getservices=async (req,res)=>{
    try{
        const services = await Services.find();
        res
        .status(200)
        .json({
            status:'success',
            results:services.length,
            data:{
                services
            }
    
        });
    }catch(err){//catch block in case of exception
        res.send(404).json({
            message:err
        })
    }
};
exports.updateservices =async (req, res) => {
    try{
      const services =await Services.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
      })


    res.status(200).json({
      status: 'success',
      data: {
        services
      }
    });
  }catch(err){
    res.status(404).json({
      status:'fail',
      message:err
    }); 
  }
  };

  exports.addService =async (req,res)=>{
    // console.log(req.body)

    const newService = await Services.create( req.body );
    // console.log(req.body);
     res.status(201).json({
         status:'success',
         
         data:{
          newService
         }
         
     });
 };