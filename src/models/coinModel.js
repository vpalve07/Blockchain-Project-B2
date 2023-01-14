const mongoose = require('mongoose')

const coinSchema = new mongoose.Schema({
    symbol:{
        type:String
    },
    name: {
        type:String
    },
    marketCapUsd: {
        type:String
    },
     priceUsd: {
        type:String
    }

},{timestamps:true})


module.exports = mongoose.model('Coin',coinSchema)