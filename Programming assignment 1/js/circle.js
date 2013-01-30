console.log( "Circle class loading." );

var Circle = Shape.extend({
	constructor: function( x, y ) {
	    this.base( x, y, color );
	    console.log( "Circle constructor loaded." );
	},
	 
	//iAm: "Circle", // Delete at next code cleanup.
	radius: 0,

	setEnd: function ( x, y ) {
		endX = x - canvas.offsetLeft;
		endY = y - canvas.offsetTop;
	},

	draw: function() {
		this.radius = Math.sqrt( Math.pow((this.x-endX),2) + Math.pow((this.y-endY),2) );
		this.redraw();
	},

	redraw: function() {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0 , 2 * Math.PI, false);
		context.strokeStyle = this.myColor;
		context.closePath();
		context.stroke();
	}
});

console.log( "Circle class loaded." );