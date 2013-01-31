console.log( "Freehand class loading." );

var Freehand = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y, color );
		this.points = [];
		console.log( "Freehand constructor loaded." );
	},

	// Override
	draw: function () {
		context.beginPath();
		var length = this.points.length;
		for (var i = 0; i < length; i++) {
			this.strokeLine( this.points[i].getX(), this.points[i].getY() );
		}
	},

	arrayX: function () {
    	point = new Point( this.getEndX(), this.getEndY() );
    	this.points.push( point );
	},

	strokeLine: function ( x, y ) {
		context.strokeStyle = this.myColor;
    	context.lineTo( x, y );
    	context.stroke();
	},

	// Override
	move: function ( x, y ) {
		console.log( "Moving Freehand object." );
		var length = this.points.length;
		for (var i = 0; i < length; i++) {
			this.points[i].x = this.points[i].x + x;
			this.points[i].y = this.points[i].y + y;
		}
    	console.log( "Freehand object moved." );
  	}
});
console.log( "Freehand class loaded." );