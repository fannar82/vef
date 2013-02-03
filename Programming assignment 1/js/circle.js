console.log( "Circle class loading." );

var Circle = Shape.extend({
	constructor: function( x, y, color, thickness, canvas ) {
		this.base( x, y, color, thickness, canvas );
	    console.log( "Circle constructor loaded." );
	},

	radius: 0,

	setEnd: function ( x, y ) {
		this.endX = x - this.canvas.offsetLeft;
    	this.endY = y - this.canvas.offsetTop;
		this.radius = Math.sqrt( Math.pow((this.x-this.getEndX()),2) + Math.pow((this.y-this.getEndY()),2) );
	},

	draw: function() {
		this.context.beginPath();
		this.context.arc(this.getX(), this.getY(), this.radius, 0 , 2 * Math.PI, false);
		this.context.strokeStyle = this.myColor;
        this.context.lineWidth = this.thickness;
		this.context.closePath();
		this.context.stroke();
	},

    select: function ( x, y, margin ) {

    	x = x - this.canvas.offsetLeft;
    	y = y - this.canvas.offsetTop;
		var distance = Math.sqrt( Math.pow((x-this.getX()),2) + Math.pow((y-this.getY()),2) );

    	if ( distance < this.radius+margin && distance > this.radius-margin )
    	{
			console.log( "Circle selected." );
			this.selected = ( !this.selected );
    	}
    }
});

console.log( "Circle class loaded." );