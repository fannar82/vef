console.log( "Line class loading." );

var Line = Shape.extend({
    constructor: function( trunk ) {
        this.base( trunk );
		console.log( "Line constructor loaded." );
	},

	// Override
	draw: function () {
		this.context.beginPath();
        this.context.strokeStyle = this.myColor;
        this.context.lineWidth = this.thickness;
		this.context.moveTo( this.getX() , this.getY() );
    	this.context.lineTo( this.getEndX() , this.getEndY() );
		this.context.stroke();
    	this.context.closePath();
	},

    select: function ( x, y, margin ) {
    	x = x - this.canvas.offsetLeft;
    	y = y - this.canvas.offsetTop;
    	
        var p1 = new Point( this.getX(), this.getY() );
        var p2 = new Point( this.getEndX(), this.getEndY() );
        var p3 = new Point( x, y );

    	var isCollinear = this.collinear( p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, margin );
        if ( isCollinear === true ) {
			this.selected = !(this.selected);
            console.log( "Line selected: " + this.selected );
    	}
    },

    collinear: function( Ax, Ay, Bx, By, Cx, Cy, margin ) { 
        // Thank you Chris for the good reminders of Discrete Math II :-)
        // http://stackoverflow.com/questions/6865832/detecting-if-a-point-is-of-a-line-segment
        var first = (Cy - Ay) / (Cx - Ax);
        var second = (By - Ay) / (Bx - Ax);

        if ( (first-second) > -0.05 && (first-second < 0.05) ){
            return true;
        }
        else {
            return false;
        }
    }
});
console.log( "Line class loaded." );
