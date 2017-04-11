// Model
var pokemon = {
  name: '',
  abilities: [],
  moves: [],
  weight: ''
};

var template;
$(document).ready(function() {
  var templateSource = $('#poke-template').html();
  template = Handlebars.compile(templateSource);
});

function renderPokemon() {
  var pokeHtml = template(pokemon);
  $('#pokemon').html(pokeHtml);
}

$(document).ready(function() {
  // First render the view
   renderPokemon()
  // Make the request to PokeAPI
   var request = new XMLHttpRequest()
  request.onreadystatechange = handleRequest
   request.open('GET', 'http://pokeapi.co/api/v2/ability' + 1)
  request.send(null)

  var searchForm = document.querySelector('#searchForm')
searchForm.addEventListener('submit', function( e ) {
  e.preventDefault()

  // Get the values enetered by the user
  var id = document.querySelector('input[name="name"]').value
  
  // Update the model
   function handleRequest() {
    if ( request.readyState === 4 ) {
      var response = JSON.parse( request.response )
      weather = {
        name: name,
        abilities: response.abilities,
        moves:response.moves,
        weight:wight
      }
    }
  }
  // Rerender the View
   renderPokemon()
})

})




