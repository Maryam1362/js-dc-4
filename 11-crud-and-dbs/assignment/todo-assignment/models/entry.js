	var mongoose = require ('mongoose')
	var Schema = mongoose.Schema
	var entryShema = new Schema({

		name :String,

	})


	var Entry = mongoose.model('Entry', entryShema)

	module.exports = Entry   // to import the file to index.js