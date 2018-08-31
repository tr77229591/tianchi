let express = require('express')
let bodyParser = require('body-parser')
let cookieParser = require('cookie-parser')
let blockchain = require('./blockchains/callHyperlegder.js')
let enterprise = require('./routes/enterprises.js')
let finins = require('./routes/finins.js')
let project = require('./routes/project.js')
let ddr = require('./routes/ddr.js')
let balanceSheet =require('./routes/balancesheet.js')
let bid = require('./routes/bid.js')
let offer = require('./routes/offer.js')
let update = require('./routes/update.js')


let path = require("path")
let app = express()

let port = 4000



///// middleware
//support parsing of application/json type post data
app.use(bodyParser.json())
//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({
	extended: false
}))
app.use(cookieParser())
app.use('/public',express.static('public'))



// engine views
app.set('views', path.join(__dirname,'views'));
app.set('view engine','pug');
/// only for test
app.get('/',function(req,res){
  res.render('test.pug')
})



//////// Router
app.use('/enterprise',enterprise)
app.use('/finins',finins)
app.use('/project',project)
app.use('/ddr',ddr)
app.use('/balanceSheet',balanceSheet)
app.use('/bid',bid)
app.use('/offer',offer)
app.use('/update',update)
















app.listen(port,function(){
	console.log("sever is runing on "+port )
})
