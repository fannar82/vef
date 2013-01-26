console.log( "Circle class loading." );

var Circle = Shape.extend({
	constructor: function( x, y ) {
	    this.base( x, y );
	    console.log( "Circle constructor loaded." );
	},
	  
	setEnd: function ( x, y ) {
		endX = x - canvas.offsetLeft;
		endY = y - canvas.offsetTop;
	},

	draw: function() {
		var radius = Math.sqrt( Math.pow((this.x-endX),2) + Math.pow((this.y-endY),2) );
		context.beginPath();
		context.arc(this.x, this.y, radius, 0 , 2 * Math.PI, false);
		context.strokeStyle = color;
		context.closePath();
		context.stroke();
	}
});

console.log( "Circle class loaded." );