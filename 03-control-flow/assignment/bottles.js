
var j;
var i;
for(i=99;i>=0;i--){
 	 j=i-1;
	 if(i===0){
	 	console.log("No more bottles of beer on the wall, no more bottles of beer.");
	    console.log("Go to the store and buy some more, 99 bottles of beer on the wall.");
	 }
	 else{
		 console.log(i+" bottles of beer on the wall, " + i + " bottles of beer")
		 if(j===0){
		 	console.log("Take one down and pass it around," + "no More" + " bottles of beer on the wall.")
		 }
		 else{
		 console.log("Take one down and pass it around," + j+ " bottles of beer on the wall.")
	     }
	}

}

