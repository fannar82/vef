//Rectangle class
	$(canvas).mousedown( function(e) {
		// "offsetX/offsetY" works in Chrome and Opera
		x = e.offsetX; //e.pageX - this.offsetLeft;
		y = e.offsetY; //e.pageY - this.offsetTop;
	});

	$(canvas).mouseup( function(e) {
		context.fillStyle = "blue";

		dx = e.pageX - this.offsetLeft - x ;
		dy = e.pageY - this.offsetTop - y;

		context.fillRect(x, y, dx, dy);

		console.log('x = ' + x);
		console.log('y = ' + y);
		console.log('dx = ' + dx);
		console.log('dy = ' + dy);

	})
