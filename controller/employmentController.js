const Employment = require('./../models/employmentModel')
 exports.getemployment=async (req,res)=>{
    try{
        const employment = await Employment.find();
        res
        .status(200)
        .json({
            status:'success',
            results:employment.length,
            data:{
              employment
            }
    
        });
    }catch(err){//catch block in case of exception
        res.send(404).json({
            message:err
        })
    }
};
exports.updateempolyment =async (req, res) => {
    try{
      const employment =await Employment.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
      })
      console.log(req.params.id);
      console.log(req.body);
      console.log(about);

    res.status(200).json({
      status: 'success',
      data: {
        employment
      }
    });
  }catch(err){
    res.status(404).json({
      status:'fail',
      message:err
    }); 
  }
  };

  exports.addemployment =async (req,res)=>{
    // console.log(req.body)

    const newemp = await Employment.create( req.body );
    // console.log(req.body);
     res.status(201).json({
         status:'success',
         
         data:{
          newemp
         }
         
     });
 };