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