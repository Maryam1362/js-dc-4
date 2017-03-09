/*

Write a function called average that calculates and returns the
average of two numbers passed in as parameters. Save your return value
to a variable and `console.log` it!

*/
// function average(a,b){
// 	return a+b/2;
// }
// console.log(average(3,5));





/*

Write a function that calculates and returns the distance between two
points. Your function should take two arrays as paramaters and return
the distance between the two points. Save your return value to a
variable and `console.log` it!

*/
function Distance(x,y){
	 return Math.sqrt(Math.pow((y[0]-x[0]),2)+ Math.pow((y[1]-x[1]),2))
}


console.log(Distance([0,0],[3,7]))

