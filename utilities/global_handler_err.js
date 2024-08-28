const development=(err,req,res,next)=>{
    res.status(err.statuscode).json({message:err.message,
        err:err,stack:err.stack
    })  //if error occurs, send 500 status and error message
}

const production =(err,req,res,next)=>{
    err.statuscode=err.statuscode||500
    res.status(err.statuscode).json({message:err.message,
    })  //if error occurs, send 500 status and error message
}

function func (err,req,res,next){if (process.env.ENV==="development"){
   return development(err,req,res,next)
}else{ return production(err,req,res,next)}}

module.exports=func

