function saveDrawing (shapesArray) {
	//var myDrawing = JSON.stringify(shapesArray);
	var myDrawing = JSON.stringify(shapesArray,["x","y","endX", "endY", "points", "imgSource", "txtSize", "txtFont", "txtStyle", "radius", "myColor", "tool" , "thickness", "message"]);
	$("#saveBox").val(myDrawing);
}

function loadDrawing (myDrawing) {
	myDrawing = JSON.parse(myDrawing);
	
	var tempArray = new Array (myDrawing.length);
	
	for (var i = myDrawing.length-1; i >= 0; i--) {
		var trunk = function() {}
		trunk.startX = myDrawing[i].x;
		trunk.startY = myDrawing[i].y;
		trunk.color = myDrawing[i].myColor;
		trunk.thickness = myDrawing[i].thickness;
		trunk.canvas = wb.canvas;
		trunk.tool = myDrawing[i].tool;

		switch (myDrawing[i].tool) {
			case "rectangle":
				var currShape = new Rectangle( trunk );
				currShape.endX = myDrawing[i].endX;
				currShape.endY = myDrawing[i].endY;
				break;
			case "circle":
				var currShape = new Circle( trunk );
				currShape.radius = myDrawing[i].radius;
				break;
			case "freehand":
				var currShape = new Freehand( trunk );
				console.log( "myDrawing.points=" + myDrawing[i].points);
				//urrShape.points = JSON.parse(myDrawing[i].points);

				for(var j=0;j < myDrawing[i].points.length; j++)
				{
					point = new Point( myDrawing[i].points[j].x, myDrawing[i].points[j].y );
					currShape.points.push( point );
				}

				currShape.endX = myDrawing[i].endX;
				currShape.endY = myDrawing[i].endY;

				break;
			case "line":
				var currShape = new Line( trunk );
				currShape.endX = myDrawing[i].endX;
				currShape.endY = myDrawing[i].endY;
				break;
			case "text":
				currShape = new Text( trunk );
				// These lines are hard-coded to the object and do not
				// need to be used here, until next release :-)
				// currShape.txtSize= myDrawing[i].txtSize;
				// currShape.txtFont= myDrawing[i].txtFont;
				// currShape.txtStyle= myDrawing[i].txtStyle;

				currShape.drawText( myDrawing[i].message );
				break;
			case "img":
				var currShape = new Img( trunk );
				break;
		}
		tempArray[i] = currShape ;
	}
	return tempArray;
}
		