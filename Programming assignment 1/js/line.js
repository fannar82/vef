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
		// THIS CODE IS NOT READY
		// https://www.google.is/search?q=is+the+point+on+a+line&oq=is+the+point+on+a+line&aqs=chrome.0.57j0j60l3j0.3555&sourceid=chrome&ie=UTF-8
    	x = x - this.canvas.offsetLeft;
    	y = y - this.canvas.offsetTop;

    	var slope = ( this.getY() - this.getEndY() ) / ( this.getX() - this.getEndY() );
    	var y_intersect = -( slope * this.getX() / this.getY() );
    	var mousePoint = slope * x + y_intersect
    	
    	if ( y == mousePoint )
    	{
			console.log( "Freehand selected." );
			this.selected = true;    		
    	}

    	console.log( "slope=" + slope) ;
    	console.log( "y_intersect=" + y_intersect );
    	console.log( "mousePoint=" + mousePoint );
    }

// 	  Y = Slope * X + YIntersect
// => 5 = 1 * 4 + 1
// => 5 = 5
// So yes, the point is on the line.

// If your lines are represented in (X1,Y1),(X2,Y2) form, then you can calculate slope with:

//  Slope = (y1 - y2) / (x1-x2)
// And then get the Y-Intersect with this:

//  Y-Intersect = - Slope * X1 / Y1;

});
console.log( "Line class loaded." );
