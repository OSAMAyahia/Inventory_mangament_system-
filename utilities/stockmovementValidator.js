const {check,body}=require('express-validator')
const validationResults=require('./ValidationRuslt')
const prod=require("../schema/ProductSchema")
exports.stockmovementValidator = [body("product").isMongoId()
.withMessage("The Id is not mongoId"),body("product").custom( async (v)=>{
    const id=await prod.findById(v)
    if(!id){
        throw new Error("the Product ID does not exist")
    }}),validationResults
]