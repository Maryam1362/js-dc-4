var express = require('express')
var exphbs  = require('express-handlebars') // for handelbar
var data    = require('./pokedex.json')  // import the data

function getPokemon( id ) {
  var pokemon
  for (var i = 0; i < data.pokemon.length; i++) {
    if ( data.pokemon[ i ].id === id ) {
      pokemon = data.pokemon[ i ]
      break
    }
  }
  return pokemon
}

var app = express()  //create an app

app.engine('handlebars', exphbs({defaultLayout: 'main'})) // seting the handlebar for express
app.set('view engine', 'handlebars')

app.get('/', function( req, res ) {
  res.render('home', data)    //pass data to handelbar 
})

app.get('/pokemon/:id', function( req, res ) {
  var pokemon = getPokemon( req.params.id )
  res.render('pokemon', pokemon)
})

app.listen( 5000, function() {      //designate a port
  console.log( 'Your pokedex is working' )
})
