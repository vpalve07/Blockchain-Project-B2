const coinModel = require('../models/coinModel')


const coin = async function(req,res){
    const response = await fetch('https://api.coincap.io/v2/assets')
    const {data} = await response.json()
    const sort = data.sort((a,b)=>b.changePercent24Hr-a.changePercent24Hr)      //.map((coin)=>{return {symbol:coin.symbol,name:coin.name,marketCapUsd:coin.marketCapUsd,priceUsd:coin.priceUsd}})
    let newData = sort.map(({symbol,name,marketCapUsd,priceUsd})=>{return {symbol,name,marketCapUsd,priceUsd}})
    let resData =[]
    newData.forEach(async(coin)=>{
        let data = await coinModel.findOneAndUpdate({symbol:coin.symbol},coin,{new:true,upsert:true})
        resData.push(data)
    })
    let db = await coinModel.find().select("symbol name marketCapUsd priceUsd -_id")
    res.send({data:db})
}


module.exports = {coin}