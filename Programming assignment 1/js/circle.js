console.log( "Circle class loading." );

var Circle = Shape.extend({
	constructor: function( x, y ) {
	    this.base( x, y, color );
	    console.log( "Circle constructor loaded." );
	},

	radius: 0,

	setEnd: function ( x, y ) {
		this.endX = x - canvas.offsetLeft;
    	this.endY = y - canvas.offsetTop;
		this.radius = Math.sqrt( Math.pow((this.x-this.getEndX()),2) + Math.pow((this.y-this.getEndY()),2) );
	},

	draw: function() {
		context.beginPath();
		context.arc(this.getX(), this.getY(), this.radius, 0 , 2 * Math.PI, false);
		context.strokeStyle = this.myColor;
		context.closePath();
		context.stroke();
	},

    select: function ( x, y, margin ) {

    	x = x - canvas.offsetLeft;
    	y = y - canvas.offsetTop;
		var distance = Math.sqrt( Math.pow((x-this.getX()),2) + Math.pow((y-this.getY()),2) );

    	if ( distance < this.radius+margin && distance > this.radius-margin )
    	{
			console.log( "Circle selected." );
			this.selected = ( !this.selected );
    	}
    }
});

console.log( "Circle class loaded." );