console.log( "Colors and tools functions loading." );

//Langar svolítið að renama þessa skrá í smá svona misc color\tools or sum. (undo)

$("#black").click(function() {
 	color = "black";
});

$("#blue").click(function() {
 	color = "blue";
});
 
$("#red").click(function() {
 	color = "red";
}); 

$("#green").click(function() {
 	color = "green";
}); 

$("#circle").click(function() {
 	tool = "circle";
 	console.log( tool + " selected." );
}); 

$("#rectangle").click(function() {
 	tool = "rectangle";
 	console.log( tool + " selected." );
}); 

$("#freehand").click(function() {
 	tool = "freehand";
 	console.log( tool + " selected." );
}); 

console.log( "Colors and tools functions loaded." );