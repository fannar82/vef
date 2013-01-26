console.log( "Colors and tools functions loading." );

//Langar svolítið að renama þessa skrá í smá svona misc color\tools or sum. (undo)

$("#blue").click(function() {
 	color = "blue";
});
 
$("#red").click(function() {
 	color = "red";
}); 

$("#circle").click(function() {
 	tool = "circle";
 	console.log( tool + " selected." );

}); 

$("#rectangle").click(function() {
 	tool = "rectangle";
 	console.log( tool + " selected." );
}); 

console.log( "Colors and tools functions loaded." );



 //$("#red").click(selectedColor("red")); working progress.