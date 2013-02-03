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

    	for (var i=1; i<this.points.length; i++) {	        
	        var p1 = new Point( this.points[i-1].x, this.points[i-1].y );
	        var p2 = new Point( this.points[i].x, this.points[i].y );
	        var p3 = new Point( x, y );

	    	var isCollinear = this.collinear( p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, margin );
	        if ( isCollinear === true ) {
				this.selected = !(this.selected);
	            console.log( "Line selected: " + this.selected );
	            break;
	    	}
    	}
    },

    collinear: function( Ax, Ay, Bx, By, Cx, Cy, margin ) { 
	    // Thank you Chris for the good reminders of Discrete Math II :-)
	    // http://stackoverflow.com/questions/6865832/detecting-if-a-point-is-of-a-line-segment
	    var first = (Cy - Ay) / (Cx - Ax);
	    var second = (By - Ay) / (Bx - Ax);

	    if ( (first-second > -0.05) && (first-second < 0.05) ) {
	        return true;
	    }
	    else {
	        return false;
	    }
    }

});
console.log( "Freehand class loaded." );