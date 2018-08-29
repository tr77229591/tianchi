let express = require('express')
let utils = require('../utils.js')
const {CHAINCODE_ID,SALT} = require("../constants.js")
let router = express.Router()

// register a new company



/**
 * @api {post} /bid/newbid  新增招标
 * @apiDescription 发起招标
 * @apiName newbid
 * @apiGroup Bid
 * @apiParam {string} startDate 发起时间
 * @apiParam {string} endDate 结束时间
 * @apiParam {string} project 所属项目
 * @apiParam {string} involvedFIs 参与的金融机构列表
 * @apiParam {string} offers 金融机构报价
 * @apiParam {string} winnerFI 中标银行
 * @apiSampleRequest http://localhost:4000/bid/newbid
 * @apiVersion 1.0.0
 */
router.post('/newbid',function(req,res){
  const {startDate,endDate,project,involvedFIs,offers,winnerFI} = req.body
  let ID=utils.createID()
  let results = utils.asyncInvoke(CHAINCODE_ID,"initMarble",[name, ID,size,encryptedPassword])
  results.then(data=>{
      res.send({code:1,payload:"Successfully register new finiancial institution"})
    })
    .catch(err=>res.status(400).send({error:"create finiancial institution fail "+ err}))
  })


// fetchbid
/**
 * @api {get} /bid/fetchbid/:id  获得招标
 * @apiDescription 获得招标信息
 * @apiName getbid
 * @apiGroup Bid
 * @apiParam {string} id 招标ID
 * @apiSampleRequest http://localhost:4000/bid/fetchbid/:id
 * @apiVersion 1.0.0
 */
router.get('/fetchbid/:id',function(req,res){
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
