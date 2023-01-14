const express = require('express')
const { coin } = require('../Controllers/coinController')
const router = express.Router()

router.get('/test-me',function(req,res){
    res.send({get:"done"})
})

router.get("/assets",coin)


module.exports = router