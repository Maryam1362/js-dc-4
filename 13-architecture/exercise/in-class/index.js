//require dependencies 
var express = require('express')
var app = express()

var bodyparser = require ('body-Parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/hackerwall')

var Article = require ('./models/Article')

app.engine('handlebars',hbs({defualtlayout:'main'}))
app.set('view engine','handlebars')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended : true}))

app.get('/',function(req,res){

    //index route
    //list every article
    res.render('index')
	res.send('hey world')
})

app.get('/article/:id',function(req,res){

	//show route
	//show details for a specific/single article


})
app
.get ('/article/new', function(req,res){

	//new view

	//render template for creating a new article
})

.post('/article/new',function(req,res){
	//create a new article in the DB
	//render show view for new article


})
app.listen(3000)
