let express = require('express')
let utils = require('../utils.js')
const {CHAINCODE_ID,SALT} = require("../constants.js")
let router = express.Router()

// register a new company


/**
 * @api {post} /enterprises/newenterprise   新增企业
 * @apiDescription 新增一个企业
 * @apiName addCompany
 * @apiGroup Compangy
 * @apiParam {string} name 用户名
 * @apiParam {string} legalPersonality 法人代表
 * @apiParam {string} registeredCaptial 注册资本
 * @apiParam {string} dateOfEstablishment 成立日期
 * @apiParam {string} businessScope 营业范围
 * @apiParam {string} basicFIName 基本开户银行名称
 * @apiParam {string} basicFIAccount 基本开户银行账号
 * @apiParam {string} password 用户密码

 * @apiSampleRequest http://localhost:4000/enterprises/newenterprise
 * @apiVersion 1.0.0
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




/**
 * @api {get} /login  企业登录
 * @apiDescription 企业登录
 * @apiName login
 * @apiGroup Compangy
 * @apiParam {string} name 企业名称
 * @apiParam {string} password 企业密码
 * @apiSampleRequest http://localhost:4000/enterprises/login/:name/:password
 * @apiVersion 1.0.0
 */
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

/**
 * @api {get} /login  企业查询
 * @apiDescription 企业查询
 * @apiName querryCompany
 * @apiGroup Compangy
 * @apiParam {string} id 企业ID
 * @apiSampleRequest http://localhost:4000/enterprises/fetchcompany/:id
 * @apiVersion 1.0.0
 */
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
