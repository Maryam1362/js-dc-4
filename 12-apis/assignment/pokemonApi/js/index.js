// // Model
// var pokemon = {
//   name: '',
//   abilities: [],
//   moves: [],
//   weight: ''
// };

// var template;
// $(document).ready(function() {
//   var templateSource = $('#poke-template').html();
//   template = Handlebars.compile(templateSource);
// });

// function renderPokemon() {
//   var pokeHtml = template(pokemon);
//   $('#pokemon').html(pokeHtml);
// }

// $(document).ready(function() {
//   // First render the view
//    renderPokemon()
//   // Make the request to PokeAPI
//    var request = new XMLHttpRequest()
//   request.onreadystatechange = handleRequest
//    request.open('GET', 'http://pokeapi.co/api/v2/ability' + 1)
//   request.send(null)

//   var searchForm = document.querySelector('#searchForm')
// searchForm.addEventListener('submit', function( e ) {
//   e.preventDefault()

//   // Get the values enetered by the user
//   var id = document.querySelector('input[name="name"]').value
  
//   // Update the model
//    function handleRequest() {
//     if ( request.readyState === 4 ) {
//       var response = JSON.parse( request.response )
//       weather = {
//         name: name,
//         abilities: response.abilities,
//         moves:response.moves,
//         weight:wight
//       }
//     }
//   }
//   // Rerender the View
//    renderPokemon()
// })

// })

var express = require ('express')
var hbs = require ('handlebars')
var app = express()
var mongoose = require ('mongoose')
var  entrydata =
app.engine('handlebars',hbs({defualtLayout:'main'}))
app.set('view-engine','handlebars')
app.get('/', function(req,res){

  res.send('hey world')
})

app.listen(3000)


