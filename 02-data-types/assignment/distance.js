<<<<<<< HEAD


// var x=  10-1;
// var y= 15-3;
// var d=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
// console.log(d);


/* Bonus Portion getting the value from command line*/

var x,y,x1_y1,x2_y2,x1,x2,y1,y2
x=process.argv[2];
y=process.argv[3];
console.log(x);
console.log(y);
x1_y1=x.split(",");
x2_y2=y.split(",");
// console.log(x1_y1);
// console.log(x2_y2);
x1 =parseInt(x1_y1[0]);
y1 =parseInt(x1_y1[1]);
x2 =parseInt(x2_y2[0]);
y2 =parseInt(x2_y2[1]);

console.log(Math.sqrt(Math.pow((x1-x2),2)+Math.pow((y1-y2),2)))
=======
var X1 = 1
var Y1 = 3
var X2 = 10
var Y2 = 15
var comma = ","

var sumXsD2 = (X1 + X2) / 2
var sumYsD2 = (Y1 + Y2) / 2
console.log(sumXsD2)
console.log(sumYsD2)
console.log(sumXsD2, comma, sumYsD2)
>>>>>>> 111a8ab0e3f71a7fd7bf91634bc416a9772fec36
