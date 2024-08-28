const mongoose = require('mongoose');

const UserSchema=new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    },
    role:{
      type: String
      ,
      enum:["admin","manager","user"],
      default :"user",
      
 
    }
  })  
 
const User=mongoose.model("user",UserSchema)

module.exports=User;  