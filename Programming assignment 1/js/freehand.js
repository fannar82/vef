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
		for (var i = 0; i < this.points.length; i++) {
			this.points[i].x = this.points[i].x + x;
			this.points[i].y = this.points[i].y + y;
		}
    	console.log( "Freehand object moved." );
  	},

    select: function ( x, y, margin ) {
    	x = x - canvas.offsetLeft;
    	y = y - canvas.offsetTop;

		// THIS CODE WILL NOT WORK
		// It only ames at the points, not the lines between the points.
		// Needs fixing asap. Propably will use same technich as Line.
		// for (var i = 0; i < this.points.length; i++) {
		// 	if ( this.points[i].x > x+margin && this.points[i].x < x-margin
		// 		&& this.points[i].y > y+margin && this.points[i].y < y-margin )
		// 	{
		// 		console.log( "Freehand selected." );
		// 		this.selected = true;
		// 		break;
		// 	}
		// }
    }
});
console.log( "Freehand class loaded." );