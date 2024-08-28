const { default: mongoose } = require('mongoose')
const productSchema=require('../schema/ProductSchema')
const APIError=require('../utilities/Erorr')
const CatchAsync=require('../utilities/CatchAsync')
exports.createProduct= CatchAsync(async(req,res)=>{
    const {name,price,quantity,category} = req.body
        const product=await productSchema.create({
            name: name,
            price:price ,    
            quantity:quantity ,
            category:category 
        })
    res.status(200).json(product) 
   
})


exports.GetAllProduct= CatchAsync(async(req,res)=>{
        const product=await productSchema.find({})
        if (product.length===0){
            return res.status(200).json({msg:'there is no product'})
        }
    res.status(200).json({status:"success",length:product.length , product}) 

})

exports.GetOneProduct= CatchAsync(async(req,res,next)=>{
    const id=req.params.ID
    if (!mongoose.Types.ObjectId.isValid(id)){
         return next(new APIError(404,'ObjectId is not Valid'))
    }
        const product=await productSchema.findById(id)
        if (!product){
           return next(new APIError(406,'Product not found'))
        //    return next(new Error('Product not found'))
            // throw new Error('Product not found')
        } 
    res.status(200).json({status:"success",product})  
})


