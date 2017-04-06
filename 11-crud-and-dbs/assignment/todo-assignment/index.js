
var express = require('express')
var bodyParser = require('body-parser')
var hbs = require('express-handlebars')
var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/guestbook')
var Entry = require('./models/entry.js')
var app = express();
app.engine('handlebars', hbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use( bodyParser.json() )
app.use( bodyParser.urlencoded({
  extended: true
}))
app.get('/', function( req, res ) {
  Entry.find({}, function( err, todos ) {
    console.log()
    res.render('home', { name: 'Maryam', todos: todos})
  })
})
app.post('/', function( req, res ) {
  var currentEntry = new Entry({
    content: req.body.content,
    name: req.body.name 
  })
  currentEntry.save()
  Entry.find({}, function( err, users ) {
    res.render('home', { name: 'Maryam', todos: todos})
  })
})
app.get('*', function( req, res ){
  res.send('404!')
})
app.listen( 9000, function() {
  console.log( 'todo list is up and running!' )
})