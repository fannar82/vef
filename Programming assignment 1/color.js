//Langar svolítið að renama þessa skrá í smá svona misc color\tools or sum. (undo)

var color = "red";
tool = "circle";

// function selectedColor (_color) {
// 	color = _color;
// 	console.log(color);
// };

 $("#blue").click(function() {
 	color = "blue";
});
 
 $("#red").click(function() {
 	color = "red";
}); 

$("#circle").click(function() {
 	tool = "circle";
 	console.log(tool);

}); 

$("#rectangle").click(function() {
 	tool = "rectangle";
 	console.log(tool);

}); 





 //$("#red").click(selectedColor("red")); working progress.