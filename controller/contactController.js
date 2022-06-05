const Contact = require('./../models/contactModel')
 exports.getcontact=async (req,res)=>{
    try{
        const contact = await Contact.find();
        res
        .status(200)
        .json({
            status:'success',
            results:contact.length,
            data:{
                contact
            }
    
        });
    }catch(err){//catch block in case of exception
        res.send(404).json({
            message:err
        })
    }
};
exports.updatecontact =async (req, res) => {
    try{
      const contact =await Contact.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true
      })
      console.log(req.params.id);
      console.log(req.body);
      console.log(about);

    res.status(200).json({
      status: 'success',
      data: {
        contact
      }
    });
  }catch(err){
    res.status(404).json({
      status:'fail',
      message:err
    }); 
  }
  };

  exports.addContact =async (req,res)=>{
    // console.log(req.body)

    const newContact = await Contact.create( req.body );
    // console.log(req.body);
     res.status(201).json({
         status:'success',
         
         data:{
          newContact
         }
         
     });
 };