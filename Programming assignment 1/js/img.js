console.log( "Img class loading." );

var Img = Shape.extend({
	constructor: function( x, y, color, thickness, canvas ) {
		this.base( x, y, color, thickness, canvas );
		console.log( "Img constructor loaded." );
		var img;
	},

	draw: function() {
		this.img = new Image();
		this.img.src = 'img/hr.jpg';
		this.context.drawImage( this.img, this.getX(), this.getY() );
	},

    select: function ( x, y, margin ) {
    	// Fix position from last coordinates of the mouse
    	// so the object moves with the mouse.
    	x = x - this.canvas.offsetLeft;
    	y = y - this.canvas.offsetTop;

    	// Check if the feft side is being clicked.
    	this.endX = this.getX() + this.img.width;
    	this.endY = this.getY() + this.img.height;
    	if ( x > this.getX()+margin && x < this.endX+margin &&
    		 y > this.getY()+margin && y < this.endY+margin )
    	{
            this.selected = (!this.selected);
			console.log( "Image selected." );
        }

        console.log( "this.img.width= " +  this.img.width + ", this.img.height=" + this.img.height);
        console.log( "getEndX()=" + this.getEndX() + ", getEndY()=" + this.getEndY() );
	}
});
console.log( "Img class loaded." );