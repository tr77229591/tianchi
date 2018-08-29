let express = require('express')
let utils = require('../utils.js')
const {CHAINCODE_ID,SALT} = require("../constants.js")
let router = express.Router()

// register a new company


/**
@api {post} /newenterprise
@apiName newEnterprise
@apiParam {string} name
@apiParam {string} password
@apiParam {string} legalPersonality farem
@apiParam {string} registeredCaptial
@apiParam {string} dateOfEstablishment
@apiParam {string} businessScope
@apiParam {string} basicFIName
@apiParam {string} basicFIAccount
@apiDescription aaa

*/
router.post('/newenterprise',function(req,res){
  const {name,legalPersonality,registeredCaptial,dateOfEstablishment,businessScope,basicFIName,basicFIAccount,password} = req.body
  const plaintext = name+password
  let ID=utils.encrypted(plaintext,SALT)
  let encryptedPassword=utils.encrypted(owner,SALT)
  let results = utils.asyncInvoke(CHAINCODE_ID,"initMarble",[name, ID,size,encryptedPassword])
  results.then(data=>{
      res.send({code:1,payload:"Successfully register new enterprise"})
    })
    .catch(err=>res.status(400).send({error:"create company fail "+ err}))
  })


// login company
router.get('/login/:name/:password',function(req,res){
  const plaintext = req.params.name+req.params.password
  let ID=utils.encrypted(encryptedPassword,SALT)
  const results= utils.asyncQuery(CHAINCODE_ID,'readMarble',[ID])
  // const results= asyncQuery(CHAINCODE_ID,'readMarble',[ID])
  results.then(data=>{
    data = JSON.parse(data)
    let decryptedPassword=utils.decrypted(ID,SALT)
    if(decryptedPassword===plaintext){
      res.cookie('id',data.ID)
      res.send({code:1,payload:data})
    }
    else{
      res.send({error:"password/name is incorrect"})
    }
        })
        .catch(err=>res.send({
          error:err
        }))
  })




// query company
router.get('/fetchcompany/:id',function(req,res){
  const results= utils.asyncQuery(CHAINCODE_ID,'readMarble',[req.params.id])
  results.then(data=>{
    data = JSON.parse(data)
      res.send({code:1,payload:data})
    }).catch(err=>{
      res.send({error:"doesnt exist:"+err})
    })
  })




module.exports = router
