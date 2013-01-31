function redraw ( shapes ) {
	console.log("Starting to redraw.");
	var length = shapes.length,
    shape = null;
	for (var i = 0; i < length; i++) {
  		console.log("Redrawing shape number" + (i) );
  		shape = shapes[i];
  		shape.draw();

  		// Special for text
      if (shape.isText == true) {	
  			shape.drawText(""); 
  		}; 
	}
	console.log("Redrawn.");
}