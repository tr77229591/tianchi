let express = require('express')
let utils = require('../utils.js')
const {CHAINCODE_ID,SALT} = require("../constants.js")
let router = express.Router()


router.post('/',function(req,res){
  const{ structName,id,stringifyArgument} = req.body
  let results = utils.asyncInvoke(CHAINCODE_ID,"update",[structName,id,stringifyArgument])
  results.then(data=>{
      res.send({code:1,payload:"Successfully update"})
    })
    .catch(err=>res.status(400).send({error:"update fail "+ err}))
  })




module.exports = router
