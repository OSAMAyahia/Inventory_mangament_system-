const {validationResult}=require('express-validator')

const validationResults= (req,res,next)=>{
    const err=validationResult(req) 
    if(!err.isEmpty()){
        return res.status(404).json({error:err})
    }next()
}

module.exports=validationResults