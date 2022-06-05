const About = require('./../models/aboutUsModel')
 exports.getaboutap=async (req,res)=>{
    try{
        const about = await About.find();
        res
        .status(200)
        .json({
            status:'success',
            results:about.length,
            data:{
                about
            }
    
        });
    }catch(err){//catch block in case of exception
        res.send(404).json({
            message:err
        })
    }
};
exports.updateAbout =async (req, res) => {
    try{
      const about =await About.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
      })
      console.log(req.params.id);
      console.log(req.body);
      console.log(about);

    res.status(200).json({
      status: 'success',
      data: {
        about
      }
    });
  }catch(err){
    res.status(404).json({
      status:'fail',
      message:err
    }); 
  }
  };

  exports.addabout =async (req,res)=>{
    // console.log(req.body)

    const newAbout = await About.create( req.body );
    // console.log(req.body);
     res.status(201).json({
         status:'success',
         
         data:{
          newAbout
         }
         
     });
 };