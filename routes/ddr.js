let express = require('express')
let utils = require('../utils.js')
const {CHAINCODE_ID,SALT} = require("../constants.js")
let router = express.Router()

// register a new company


/**
 * @api {post} /ddr/newddr  新增尽职报告调查
 * @apiDescription 新增尽职报告调查
 * @apiName newddr
 * @apiGroup ddr
 * @apiParam {string} balanceSheet 资产负债表
 * @apiParam {string} description 其他描述
 * @apiSampleRequest http://localhost:4000/ddr/newddr
 * @apiVersion 1.0.0
 */
router.post('/newddr',function(req,res){
  const {balanceSheet,description} = req.body
  const plaintext = name
  let ID=utils.encrypted(plaintext,SALT)
  let encryptedPassword=utils.encrypted(owner,SALT)
  let results = utils.asyncInvoke(CHAINCODE_ID,"initMarble",[name, ID,size,encryptedPassword])
  results.then(data=>{
      res.send({code:1,payload:"Successfully register new finiancial institution"})
    })
    .catch(err=>res.status(400).send({error:"create finiancial institution fail "+ err}))
  })


// fetchddr
/**
 * @api {get} /ddr/fetchddr/:name  查询尽职报告调查
 * @apiDescription 查询尽职报告调查
 * @apiName querryddr
 * @apiGroup ddr
 * @apiParam {string} name 资产负债ID
 * @apiSampleRequest http://localhost:4000/ddr/fetchddr/:name
 * @apiVersion 1.0.0
 */
router.get('/fetchddr/:name',function(req,res){
  const plaintext = req.params.name
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
