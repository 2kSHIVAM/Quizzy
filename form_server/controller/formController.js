const Response = require('./../model/response')

exports.submit = async(req,res,next)=>{
    // below is the updated code 
    const data=await Response.findOne({enrollmentNumber:req.body.enrollmentNumber})
    if(data)
    {
      // data.answers=req.body.answers
      // const id=data._id
      // await Response.findByIdAndUpdate(id,data)
      const id=data._id
      await Response.findByIdAndDelete(id)
    }
      const newRes = await Response.create({
        name: req.body.name,
        email: req.body.email,
        enrollmentNumber: req.body.enrollmentNumber,
        batch: req.body.batch,
        answers:req.body.answers
    })
    res.status(200).json({
      status: 'success',
      data: {
        newRes
      }
    });

};