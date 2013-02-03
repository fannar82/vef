function saveDrawing (shapesArray) {
	//var myDrawing = JSON.stringify(shapesArray);
	var myDrawing = JSON.stringify(shapesArray,["x","y","endX", "endY", "points"]);
	console.log(myDrawing);
}

