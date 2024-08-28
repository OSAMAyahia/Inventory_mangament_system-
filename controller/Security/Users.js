const jwt=require('jsonwebtoken');
const userSchma=require('../../schema/UsersSchema');
const bcrypt = require('bcryptjs');
exports.signup=async(req,res,next)=>{
    const {name, email,password,role}=req.body;
    const pass1=await bcrypt.hash(password,10)
        
try{
    const user= await userSchma.create({name,email,password:pass1,role}); 
    const jwts=jwt.sign({Ids:user._id},process.env.security,{expiresIn:process.env.ex})
    res.status(200).json({ status:"success",jwt:jwts,user});

}catch(err){res.status(404).json(err)}

}

exports.login=async(req,res,next)=>{
    const {email,password}=req.body
try{
    const user= await userSchma.findOne({email}); 

    if(!user){
        return res.status(401).json({message: 'Invalid email or password'});
    }
    const user2= await bcrypt.compare(password,user.password)
    if(!user2){ return res.status(401).json({message: 'Invalid email or password'});}
    const jwts=jwt.sign({Ids:user._id},process.env.security,{expiresIn:process.env.ex})
    res.status(200).json({ status:"success",jwt:jwts});

}catch(err){res.status(404).json(err)}

}