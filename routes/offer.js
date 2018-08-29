let express = require('express')
let utils = require('../utils.js')
const {CHAINCODE_ID,SALT} = require("../constants.js")
let router = express.Router()

// register a new company


/**
@api {post} /newbalancesheet
@apiParam {string} name
*/
router.post('/newoffer',function(req,res){
  const {loanAmount,interestRate} = req.body
  let ID=utils.createID()
  let results = utils.asyncInvoke(CHAINCODE_ID,"initMarble",[name, ID,size,encryptedPassword])
  results.then(data=>{
      res.send({code:1,payload:"Successfully register new finiancial institution"})
    })
    .catch(err=>res.status(400).send({error:"create finiancial institution fail "+ err}))
  })


// fetchbid
router.get('/fetchoffer/:id',function(req,res){
  const plaintext = req.params.id

  const results= utils.asyncQuery(CHAINCODE_ID,'readMarble',[plaintext])
  results.then(data=>{
    data = JSON.parse(data)
    if(data.id===plaintext){
      res.cookie('id',data.ID)
      res.send({code:1,payload:data})
    }
    else{
      res.send({error:"id is incorrect"})
    }
        })
        .catch(err=>res.send({
          error:err
        }))
  })




// // query company
// router.get('/fetchfinins/:id',function(req,res){
//   const results= utils.asyncQuery(CHAINCODE_ID,'readMarble',[req.params.id])
//   results.then(data=>{
//     data = JSON.parse(data)
//       res.send({code:1,payload:data})
//     }).catch(err=>{
//       res.send({error:"doesnt exist:"+err})
//     })
//   })




module.exports = router
