const mongoose = require('mongoose')

const stock =new mongoose.Schema({
    product:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    status: {
        type: String,
        enum: ['add', 'remove'],
        required: true
    }
    ,
    quantity:{type:Number,
        required: true,
        min:1
    }
})

const stockmovement =mongoose.model('stockmovement',stock)

module.exports = stockmovement;