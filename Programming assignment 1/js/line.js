console.log( "Line class loading." );

var Line = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y, color );
		console.log( "Line constructor loaded." );
	},

	//iAm: "Line",
	 // bendX: 0,
	 // bendY: 0,

	// setEnd: function ( x, y ) {
	// 	endX = x - canvas.offsetLeft;
	// 	endY = y - canvas.offsetTop;
	// },

	draw: function() {
		this.redraw();
	},
	
	redraw: function () {
		context.strokeStyle = color;
		context.beginPath();
		context.moveTo( this.getX() , this.getY() );
    	context.lineTo( this.getEndX() , this.getEndY() );
		context.stroke();
    	context.closePath();
	}

});
console.log( "Line class loaded." );
