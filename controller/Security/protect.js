const jwt=require("jsonwebtoken")
const userchema=require('../../schema/UsersSchema')
const CatchAsync =require('../../utilities/CatchAsync')
exports.protect=CatchAsync(async(req,res,next)=>{
    // middleware to protect routes
    if (!req.headers.authorization){
        return res.status(401).json({msg:"you do not have access to this, please log in fisrt"})
      }
    let authorization;
    const authorizationHeader =req.headers.authorization
    if (authorizationHeader  && authorizationHeader.startsWith("Bearer ")){
         authorization=authorizationHeader.split(" ")[1]
    }
        const jw=jwt.verify(authorization ,process.env.security)
        console.log(jw.Ids)
    const user=await userchema.findById(jw.Ids)
    console.log(user) 
  if (!user){
    return res.status(401).json({msg:"you do not have access to this, please log in fisrt"})
  }
  req.CurrentUser=user
    next();
}
       
)

exports.RestrictedTo=(...role)=>{
  // middleware to protect routes for specific roles
 return (req,res,next)=>{
    if(role.includes(req.CurrentUser.role)){next()}
    else {return res.status(401).json({msg:"you do not have access to this"})
}

}
     
}   