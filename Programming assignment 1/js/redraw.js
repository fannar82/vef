function redraw ( shapes ) {
	console.log("Starting to redraw.");
	var length = shapes.length - 1,
    shape = null;
	shapesRedo.push(shapes.pop());
	for (var i = 0; i < length; i++) {
  		console.log("Redrawing shape number" + (i) );
  		shape = shapes[i];
  		shape.redraw();
	}
	console.log("Redrawn.");
}