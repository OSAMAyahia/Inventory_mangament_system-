const express = require('express')
const stockmovement=require('../controller/stockmovementController')
const Security=require('../controller/Security/protect')
const validator = require('../utilities/stockmovementValidator')
const Route=express.Router()
Route.route("/").post(Security.protect,Security.RestrictedTo("admin","manager")
,validator.stockmovementValidator
,stockmovement.createstock).get(Security.protect,Security.RestrictedTo("admin","manager"),stockmovement.GetAllstock)
Route.route("/:ID").get(Security.protect,stockmovement.GetOnestock)

module.exports =Route