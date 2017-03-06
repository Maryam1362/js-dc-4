// /*
//   While Loops
//   In-class Exercise #2
//   Code Independently, then together
// */
// // for( var i=0; i<10;i++ ){
// // 	console.log(i);

// // }

// var grades = [87, 95.5, 40, 79, 20]

// for( i in grades){
// 	consolo.log( i,grades[i])

// }
// //for(grade in grades){
// 	//or
// // for (var i=0; i<grades.length;i++){

// // 	if(grades[i]>=90){
// // 		console.log('A')
// // 	}else if (grades[i]>=80){
// // 		consolo.log('B')
// // 	}
// // 	else if (grades[i]>=70){
// // 		consolo.log('c')
// // 	}
// // 	else{
// // 		consolo.log('d')
// // 	}
// // }

// var x=15
// while (x>=0){
// 	console.log(x);
// 	x--;
// }
// Create an array with the names 'curly', 'lary' and 'moe'

var names=['curly','lary','moe']
var i=0;


/*
Create a simple while loop that iterates over the array of names and `console.log`s them
*/

// while(i<names.length){
// 	console.log(names[i])
// 	i++;
// }

/*
Create a simple while loop that iteratoes over each name in the array of names. Inside your loop, if the name is 'curly', then `console.log` 'curly is the best', otherwise `console.log` the current name is one of the three stooges
*/

// while(i<names.length){
// 	if(names[i]==='curly'){
// 		console.log("curly is the best")
// 	}
// 	else{
// 		console.log("the current name is one of the three stooges")
// 	}
// 	i++;
// }

// // Create a `do while` loop that does the same as the above

do{
	if(names[i]==='curly'){
		console.log(names[i]+ " is the best")
	}
	else{
		console.log(names[i]+" is one of the three stooges")
	}
	i++;
	}while (i<names.length)


