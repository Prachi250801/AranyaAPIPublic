const Sponsors = require('./../models/sponsorModel')
 exports.getsponsors=async (req,res)=>{
    try{
        const sponsors = await Sponsors.find();
        res
        .status(200)
        .json({
            status:'success',
            results:sponsors.length,
            data:{
                sponsors
            }
    
        });
    }catch(err)
    {
        res.send(404).json({
            message:err
        })
    }
};
exports.updatesponsors =async (req, res) => {
    try{
      const sponsors =await Sponsors.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
      })
    res.status(200).json({
      status: 'success',
      data: {
         sponsors
      }
    });
  }catch(err){
    res.status(404).json({
      status:'fail',
      message:err
    }); 
  }
  };