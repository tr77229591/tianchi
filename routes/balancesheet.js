let express = require('express')
let utils = require('../utils.js')
const {CHAINCODE_ID,SALT} = require("../constants.js")
let router = express.Router()

// register a new company


/**
@api {post} /balancesheet/newbalancesheet
@apiParam {string} name
*/
router.post('/newbalancesheet',function(req,res){
  const {lrfs,actualControllers} = req.body
  const plaintext = lrfs
  let ID=utils.encrypted(plaintext,SALT)
  let encryptedPassword=utils.encrypted(owner,SALT)
  let results = utils.asyncInvoke(CHAINCODE_ID,"initMarble",[name, ID,size,encryptedPassword])
  results.then(data=>{
      res.send({code:1,payload:"Successfully register new finiancial institution"})
    })
    .catch(err=>res.status(400).send({error:"create finiancial institution fail "+ err}))
  })


// fetchddr
router.get('/fetchbalancesheet/:lrfs',function(req,res){
  const plaintext = req.params.lrfs
  let ID=utils.encrypted(encryptedPassword,SALT)
  const results= utils.asyncQuery(CHAINCODE_ID,'readMarble',[ID])
  results.then(data=>{
    data = JSON.parse(data)
    let decryptedPassword=utils.decrypted(ID,SALT)
    if(decryptedPassword===plaintext){
      res.cookie('id',data.ID)
      res.send({code:1,payload:data})
    }
    else{
      res.send({error:"name is incorrect"})
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