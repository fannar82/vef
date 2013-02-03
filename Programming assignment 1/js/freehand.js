console.log( "Freehand class loading." );

var Freehand = Shape.extend({
    constructor: function( trunk ) {
        this.base( trunk );
		this.points = [];
		console.log( "Freehand constructor loaded." );
	},

	// Override
	draw: function () {
		this.context.beginPath();
		for (var i = 0; i < this.points.length; i++) {
			this.strokeLine( this.points[i].getX(), this.points[i].getY() );
		}
	},

	arrayX: function () {
		point = new Point( this.getEndX(), this.getEndY() );
	 	this.points.push( point );
	},

	strokeLine: function ( x, y ) {
        this.context.strokeStyle = this.myColor;
        this.context.lineWidth = this.thickness;
    	this.context.lineTo( x, y );
    	this.context.stroke();
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
    	x = x - this.canvas.offsetLeft;
    	y = y - this.canvas.offsetTop;

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