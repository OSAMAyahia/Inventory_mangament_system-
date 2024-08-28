const {check}=require("express-validator")
const validationResults=require("../utilities/ValidationRuslt")
exports.users=[check("email").isEmail().withMessage("this is a unvalid email"),
    check("password").isLength({min:4,max:10}).withMessage("password must between 4 and 10 characters"),
    validationResults
]