/*

PIXART
A JS Painting Website

In this exercise, students will build out a simple paint application. 
This application will have a form where users can set a color that they would like to paint with.
 The user can then mouse over cells that they would like to paint with that color.

*/



/*

Step 1: Building the canvas
Our canvas is 500px by 500px and we need to fill it with cells (wich a class of .square) that are 10px by 10px.

First, add however many divs with a class of "square" as you need to to fill our the #canvas element.

If #canvas is 500 x 500, how many 10 x 10 squares can we fit in to it?

How we we create elements in JavaScript and add them to the page?

*/

var square
var element = document.getElementById("canvas");
var button = document.getElementById("set-color")
var brush_color = document.querySelector(".brush")
var currentColor = "green"

for (var i=0; i < 2500 ; i++) {
 square= document.createElement("div");
 square.classList.add("square");   // we could do classname object but this classlist in newer version
 element.appendChild(square);
 //square.addEventListener("mouseover", paint)
 
}





/*

Step 2: Form Event
When the user submits the form, either by hitting enter in the text input field or by clicking on the submit button, 
we should then get the color value that they entered and save it to a variable called currentColor.

Once we have the color, we should update our .brush element, so that the user can see what color they're painting with at any given time.

hints:
(1) you may need to look up form specific events,
(2) you may need to avoid the browser's default behavior when submitting a form,
(3) you should query for the input field from the event target
(4) once you have the input field, it's current value is stored in the value property

*/


button.addEventListener("click", function(event){
     event.preventDefault();  /*best practice is have the event.preventDefualt on top*/
     currentColor = document.getElementById("color-field").value
     brush_color.style.background = currentColor 
     
 	
  })



/*

Step 3: Readying our Canvas
Now that we can get the color the user wants to paint with from our form, we need to make it
 so they can actually paint with that color. 
Create an event handler that will change the background color of the event target to 
the current color and attach it to every div.square that you created made above.




Hints:
(1) you probably want to write your function here and then attach the event in your loop up in Step 1
(2) think about what event we might want to attach our event handler too; what mouse events 
are there that might make sense?

*/
 

// function paint( event ) {
//   event.target.style.backgroundColor = currentColor
// }


element.addEventListener('mouseover',function(e){

  e.target.style.background = currentColor
})

/*have the event listener on parent target**/
