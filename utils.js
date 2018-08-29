let crypto = require('crypto')
let uuid = require('uuid/v1')
let blockchain = require('./blockchains/callHyperlegder.js')
let to =require('./to.js')


module.exports.encrypted= function(data,salt){
  let cipher = crypto.createCipher('aes-256-cbc',salt)
  let crypted = cipher.update(data,'utf-8','hex')
  crypted +=cipher.final('hex')
  return crypted
}

module.exports.decrypted=function(crypted,salt){
  let decipher = crypto.createDecipher('aes-256-cbc',salt)
  let dec = decipher.update(crypted,'hex','utf8')
  dec += decipher.final('utf8')
  return dec
}


module.exports.createID=function(){
  return(uuid())
}


module.exports.asyncQuery = async function(chaincodeId,fcn,args){
    const data =await blockchain.createChannel()
    // const result= await blockchain.queryChain(data.client,data.channel,CHAINCODE_ID,'readMarble',['marble4'])
    const [err,result]= await to(blockchain.queryChain(data.client,data.channel,chaincodeId,fcn,args))
    if(err){
      throw {error:err}
    }
    return result
}

module.exports.asyncInvoke = async function(chaincodeId,fcn,args){
    const data =await blockchain.createChannel()
    // await blockchain.invokeChain(data.client,data.channel,data.peer,data.my_peers,CHAINCODE_ID,"initMarble",['marble4', 'red','445','kawk'])
    let [err,results]=await to(blockchain.invokeChain(data.client,data.channel,data.peer,data.my_peers,chaincodeId,fcn,args))
    if(err){
      throw {error:err}
    }
    return results
}
