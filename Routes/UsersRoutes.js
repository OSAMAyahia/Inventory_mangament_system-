const express = require('express')
const Security=require('../controller/Security/Users')
const validation=require("../utilities/UsersValidation")
const Route=express.Router()
Route.route("/signup").post(validation.users,Security.signup)
Route.route("/login").post(Security.login)
module.exports =Route
module.exports =Route