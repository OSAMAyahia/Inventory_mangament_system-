const express = require('express')
const product=require('../controller/ProductController')
const Security=require('../controller/Security/protect')
const Route=express.Router()
Route.route("/").post(Security.protect,Security.RestrictedTo("admin","manager"),product.createProduct).get(Security.protect,Security.RestrictedTo("admin","manager"),product.GetAllProduct)
Route.route("/:ID").get(Security.protect,product.GetOneProduct)

module.exports =Route