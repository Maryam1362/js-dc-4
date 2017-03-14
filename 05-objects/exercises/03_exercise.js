/*

You can pull in data from another file using JavaScripts `require()` method,
which you pass a path as a string to the file you wish to incldue. For instance,
you could require a json file like this:

var myJSON = require('./path/to/file.json')

Given the above, import `data.json` and save it to a variable.

Once json data is imported, it can be treated like a regular JavaScript object.
How cool is that?

Write a loop that will print out our JSON data as a string, in the following format:

Quick-E-Mart's Current Stock
Item, Color, Price
Aubergine, Purple, 1.59
Apple, Red, 0.78
Nuts, Brown, 2.23

*/
var myjason=require('./data.json')
// console.log(myjason[0])
// console.log((myjason["Store Name"])+ " Current Stock")
// console.log("Item, Color, Price")

var storeSize = Object.keys (myjason.Foods[0])

 console.log(storeSize)
 console.log(storeSize.join(','))
var foods = myjason.Foods

for(var i = 0; i < foods.length; i++){
     
console.log( foods[ i ].name  + ', '+ foods[ i ].color+ ','+ foods[ i ].price )
}

//  //    for(var j=0; j <=f oods[i].length; j++){

// 	// 	console.log((foods[i][j])
// 	// }

// }