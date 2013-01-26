console.log( "Freehand class loading." );

var Freehand = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y );

		context.beginPath();

		console.log( "Freehand constructor loaded." );
	},
	  
	setEnd: function ( x, y ) {
		endX = x - canvas.offsetLeft;
		endY = y - canvas.offsetTop;
	},

	draw: function() {
		context.strokeStyle = color;
    	context.lineTo( endX, endY );
    	context.stroke();
	}
});
console.log( "Freehand class loaded." );