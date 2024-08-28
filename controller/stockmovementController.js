const stockmovement=require('../schema/stockmovement')
const CatchAsync=require('../utilities/CatchAsync')

exports.createstock=CatchAsync( async(req,res,next)=>{
    const {product,status,quantity} = req.body
        const stock=await stockmovement.create({
            product: product,
            status:status ,    
            quantity:quantity 
        })
    res.status(200).json(stock) 
}
)

exports.GetAllstock= CatchAsync(async(req,res,next)=>{
        const stock=await stockmovement.find({})
    res.status(200).json({status:"success",length: stock,length,stock} ) 
   
}
)
exports.GetOnestock= CatchAsync(async(req,res,next)=>{
    const id=req.params.ID
        const stock=await stockmovement.findById(id)
    res.status(200).json({status:"success",stock}) 

}
)

