<<<<<<< HEAD
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
=======
// require dependencies
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')

var app = express()

mongoose.connect('mongodb://localhost:27017/hackerwall')

var Article = require('./models/Article')

app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}))

// application routes (i.e. controller)
app.get('/', function( req, res ) {
  // index route
  // list every article

  Article.find({}, function( err, articles ) {

    res.render('index', { articles: articles })

  })

})

app
  .get('/article/new', function( req, res ) {
    // new view
    // render template for creating a new article

    res.render('new')

  })
  .post('/article/new', function( req, res ) {
    // create a new article in the DB
    // render show view for new article

    var newArticle = new Article({
      url: req.body.url,
      author: req.body.author,
      title: req.body.title,
      description: req.body.description
    })

    newArticle.save()

    res.redirect('/')

  })

  app.get('/article/:id', function( req, res ) {
    // show route
    // show details for a specific/single article
  })

// run on port 3000
>>>>>>> 8c0a0f9a6249997ae46beca7017ea97374c850c2
app.listen(3000)
