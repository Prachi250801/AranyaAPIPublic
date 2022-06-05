const Team = require('./../models/teamModel')
 exports.getteam=async (req,res)=>{
    try{
        const team = await Team.find();
        res
        .status(200)
        .json({
            status:'success',
            results:team.length,
            data:{
                team
            }
    
        });
    }catch(err)
    {
        res.send(404).json({
            message:err
        })
    }
};
exports.updateteam =async (req, res) => {
    try{
      const team = await Team.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
      })
    res.status(200).json({
      status: 'success',
      data: {
        team
      }
    });
  }catch(err){
    res.status(404).json({
      status:'fail',
      message:err
    }); 
  }
  };
  exports.addTeam =async (req,res)=>{
    // console.log(req.body)

    const newTeam = await Team.create( req.body );
    // console.log(req.body);
     res.status(201).json({
         status:'success',
         
         data:{
          newTeam
         }
         
     });
 };