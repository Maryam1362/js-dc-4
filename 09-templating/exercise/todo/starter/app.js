var data = {
  todos: [
    'learn html',
    'learn css',
    'learn js'
  ]
}

var app = document.getElementById('app')
var templateSource = document.getElementById('to-do-template')
var template = Handlebars.compile( templateSource.innerHTML )
var renderedTemplate = template( data )

app.innerHTML = renderedTemplate