var express = require('express')
var exphbs = require('express-handlebars')
var app = express()
 

app.engine('handlebars',exphbs({defualtLayout:'main'}))
app.set('viewengine','handlebars')

app.get('/',function(req,res){

res.send('hey')

})

app.listen(5000, function() {
  console.log('example app listening on port 5000')
})