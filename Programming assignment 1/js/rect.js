console.log( "Rectangle class loading." );

var Rectangle = Shape.extend({
	constructor: function( x, y, color, thickness, canvas , tool ) {
		this.base( x, y, color, thickness, canvas, tool );
		console.log( "Rectangle constructor loaded." );
	},

	draw: function() {
		this.context.strokeStyle = this.myColor;
        this.context.lineWidth = this.thickness;
		this.context.strokeRect(this.getX(), this.getY(), this.getEndX() - this.getX() , this.getEndY() - this.getY() );
	},

    select: function ( x, y, margin ) {
    	// Fix position from last coordinates of the mouse
    	// so the object moves with the mouse.
    	x = x - this.canvas.offsetLeft;
    	y = y - this.canvas.offsetTop;

    	// Check if the feft side is being clicked.
    	if ( x < this.getX()+margin && x > this.getX()-margin )
    	{
    		if ( y > this.getY() && y < this.getEndY() ) {
    			console.log( "Left side of Rectangle." );
                this.selected = (!this.selected);
    		}
    	}
    	
    	// Check if the lfeft side is being clicked.
    	if ( x > this.getEndX() - margin && x < this.getEndX() + margin )
    	{
    		if ( y > this.getY() && y < this.getEndY() ) {
    			console.log( "Right side of Rectangle." );
                this.selected = (!this.selected);
    		}
    	}

		// Check if the top is being clicked.
		if ( y < this.getY()+margin && y > this.getY()-margin )
    	{
    		if ( x > this.getX() && x < this.getEndX() ) {
    			console.log( "Top of Rectangle." );
                this.selected = (!this.selected);
    		}
    	}

		// Check if the bottom is being clicked.
    	if ( y > this.getEndY()-margin && y < this.getEndY()+margin )
    	{
    		if ( x > this.getX() && x < this.getEndX() ) {
    			console.log( "Bottom of Rectangle." );
    			this.selected = (!this.selected);
    		}
    	}

    	// DO NOT UNCOMMENT THIS SECTION
    	// If this is used the item is deselected when
    	// it hasn't been hit. Unselect should be handeled
    	// in some other way.
    	// else
    	// {
    	// 	this.selected = false;
    	// }
    	// DO NOT UNCOMMENT THIS SECTION
    },
});
console.log( "Rectangle class loaded" );