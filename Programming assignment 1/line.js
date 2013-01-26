console.log( "Line class loading." );

var Line = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y );

		context.beginPath();

		console.log( "Line constructor loaded." );
	},

	iAm: "Line",
	  
	setEnd: function ( x, y ) {
		endX = x - canvas.offsetLeft;
		endY = y - canvas.offsetTop;
	},

	draw: function() {
		context.strokeStyle = color;
		context.moveTo( this.x, this.y );
    	context.lineTo( endX, endY );
    	context.stroke();
    	context.closePath();
	}
});
console.log( "Line class loaded." );