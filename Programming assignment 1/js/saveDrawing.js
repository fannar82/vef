function saveDrawing (shapesArray) {
	//var myDrawing = JSON.stringify(shapesArray);
	var myDrawing = JSON.stringify(shapesArray,["x","y","endX", "endY", "points", "imgSource", "txtSize", "txtFont", "txtStyle", "radius", "myColor", "tool" , "thickness"]);
	$("#saveBox").val(myDrawing);
}

function loadDrawing (myDrawing) {
	myDrawing = JSON.parse(myDrawing);
	$("#saveBox").val(myDrawing);
	
	var tempArray = new Array (myDrawing.length);
	
	for (var i = myDrawing.length - 1; i >= 0; i--) {
		switch (myDrawing[i].tool) {
				case "rectangle":
					var currShape = new Rectangle( myDrawing[i].x, myDrawing[i].y, myDrawing[i].myColor, myDrawing[i].thickness, wb.canvas, myDrawing[i].tool );
					currShape.endX = myDrawing[i].endX;
					currShape.endY = myDrawing[i].endY;
					break;
				case "circle":
					wb.currentShape = new Circle( startX, startY, wb.color, wb.thickness, wb.canvas );
					break;
				case "freehand":
					wb.currentShape = new Freehand( startX, startY, wb.color, wb.thickness, wb.canvas );
					break;
				case "line":
					wb.currentShape = new Line( startX, startY, wb.color, wb.thickness, wb.canvas );
					break;
				case "text":
					wb.textinput.show();
					wb.textinput.offset({ left: e.pageX, top: e.pageY });
					wb.textinput.focus();
					wb.currentShape = new Text( startX, startY, wb.color, wb.thickness, wb.canvas );
					break;
				case "img":
					wb.currentShape = new Img( startX, startY, wb.color, wb.thickness, wb.canvas );
					break;
				}
		tempArray[i] = currShape ;
	}
	return tempArray;
}
		