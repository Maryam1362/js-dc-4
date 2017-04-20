<<<<<<< HEAD
var mongoose = require ('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({

	author: String,
	title: String,
	description: String,
	url : String,
	Comments: Array
})

var Article = mongoose.model('Article', ArticleSchema)

module.exports = Article

//export the module to import it in index.js
=======
var mongoose = require('mongoose')
var Schema = mongoose.Schema

var ArticleSchema = new Schema({
  author: String,
  title: String,
  description: String,
  url: String,
  comments: Array
})

var Article = mongoose.model( 'Article', ArticleSchema )

module.exports = Article
>>>>>>> 8c0a0f9a6249997ae46beca7017ea97374c850c2
