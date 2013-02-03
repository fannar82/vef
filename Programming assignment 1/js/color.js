console.log( "Colors and tools functions loading." );

//Langar svolítið að renama þessa skrá í smá svona misc color\tools or sum. (undo)

$("#black").click(function() {
 	wb.color = "black";
});

$("#blue").click(function() {
 	wb.color = "blue";
});
 
$("#red").click(function() {
 	wb.color = "red";
}); 

$("#green").click(function() {
 	wb.color = "green";
}); 

$("#circle").click(function() {
 	wb.tool = "circle";
 	console.log( wb.tool + " selected." );
}); 

$("#rectangle").click(function() {
 	wb.tool = "rectangle";
 	console.log( wb.tool + " selected." );
}); 

$("#freehand").click(function() {
 	wb.tool = "freehand";
 	console.log( wb.tool + " selected." );
}); 

$("#line").click(function() {
 	wb.tool = "line";
 	console.log( wb.tool + " selected." );
});

$("#text").click(function() {
 	wb.tool = "text";
 	console.log( wb.tool + " selected." );
}); 

$("#img").click(function() {
 	wb.tool = "img";
 	console.log( wb.tool + " selected." );
});

$("#watermark").click(function() {
 	wb.tool = "watermark";
 	console.log( wb.tool + " selected." );
});

$("#clearWB").click(function() {
 	wb.context.clearRect(0, 0, wb.canvas.width, wb.canvas.height);
	wb.shapesArray = [];
 	console.log( "Whiteboard cleared." );
});

// Change thickness of lines when selectThickness select
// box is changed.
$(selectTickness).change(function() {
	wb.thickness = $(selectTickness).val();
	console.log( "Line thickness = " + wb.thickness );
});

console.log( "Colors and tools functions loaded." );