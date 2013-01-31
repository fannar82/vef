console.log( "Line class loading." );

var Line = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y, color );
		console.log( "Line constructor loaded." );
	},

	draw: function () {
		context.strokeStyle = this.myColor;
		context.beginPath();
		context.moveTo( this.getX() , this.getY() );
    	context.lineTo( this.getEndX() , this.getEndY() );
		context.stroke();
    	context.closePath();
	}
});
console.log( "Line class loaded." );
