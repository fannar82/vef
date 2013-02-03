console.log( "Colors and tools functions loading." );

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

$("#save").click(function() {
 	saveDrawing( wb.whiteBoards[wb.currWB] );
 	console.log("Drawing saved");
});

$("#load").click(function() {
 	var saveboxObj = $("#saveBox").val();
 	wb.whiteBoards[wb.currWB] = loadDrawing(saveboxObj, wb.canvas);
 	redraw( wb.whiteBoards[wb.currWB] );
 	console.log("Drawing loaded.");
});

$("#clearWB").click(function() {
 	wb.context.clearRect(0, 0, wb.canvas.width, wb.canvas.height);
	wb.whiteBoards[wb.currWB] = [];
 	console.log( "Whiteboard cleared." );
});

// Change thickness of lines when selectThickness select
// box is changed.
$(selectTickness).change(function() {
	wb.thickness = $(selectTickness).val();
	console.log( "Line thickness = " + wb.thickness );
});

$("#prev_wb").click(function() {
	// Only go to previous if it acutally exists.
	if ( wb.currWB > 0 )
	{
		wb.currWB = wb.currWB-1;
		//updateWhiteboard();
		wb.context.clearRect(0, 0, wb.canvas.width, wb.canvas.height);
		redraw(wb.whiteBoards[wb.currWB]);
		console.log( "Previous (" + wb.currWB + ") whiteboard loaded" );
	}
});

$("#next_wb").click(function() {
	// Only go to next if it acutally exists.
	if ( wb.currWB < 3 )
	{
		wb.currWB = wb.currWB+1;
		//updateWhiteboard();
		wb.context.clearRect(0, 0, wb.canvas.width, wb.canvas.height);
		redraw(wb.whiteBoards[wb.currWB]);
		console.log( "Next (" + wb.currWB + ") whiteboard loaded" );
	}
});

//	This is not implemented in this version.
// $("#watermark").click(function() {
//  	wb.tool = "watermark";
//  	console.log( wb.tool + " selected." );
// });


console.log( "Colors and tools functions loaded." );