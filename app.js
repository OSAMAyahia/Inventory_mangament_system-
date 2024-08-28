const express=require("express")
const mongoose=require("mongoose")
const morgan = require("morgan")
const app=express()
const handler=require("./utilities/global_handler_err")
const dotenv=require("dotenv").config('/.env')
const productRoute=require('./Routes/ProductRoutes')
const stockRoute=require('./Routes/stockmovementRoutes')
// mongoose.connect(process.env.URL).then(()=>console.log('connected to database'))
// .catch((err)=>{
//     console.log(err)
// })
mongoose.connect(`mongodb://${process.env.USERNAMEDOCKER}:${process.env.PASSDOCKER}@${process.env.hostDOCKER}:${process.env.mongoportDOCKER}/`)
.then(()=>console.log("connected to database "))
// .catch(err=>console.log(err))

const UsersRoutes=require('./Routes/UsersRoutes')
app.use(express.json())
app.use(morgan('dev'))
console.log(process.env.ENV)
app.use('/app/product',productRoute)
app.use('/app/stock',stockRoute)
app.use('/app/Security',UsersRoutes)  
app.all("*", (req,res,next)=>{
    //if route not found, send 404 status and message  //route not found middleware
    next( new Error(`Page Not Found this route ${req.originalUrl}`))

})
app.use(handler)  
app.listen(process.env.PORT,()=>console.log(`listening on port:${process.env.PORT}`))
process.on("unhandledRejection",(err)=>{console.log(err.message);
    process.exit(1)
}
) 