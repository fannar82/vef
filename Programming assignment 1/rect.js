console.log( "Rectangle class loading." );

var Rectangle = Shape.extend({
	constructor: function( x, y ) {
		this.base(x,y);
		console.log( "Rectangle constructor loaded." );
	},
	  
	setEnd: function ( x, y ) {
		endX = x - canvas.offsetLeft - this.x;
		endY = y - canvas.offsetTop - this.y;
	},

	draw: function() {
		context.strokeStyle = color;
		context.strokeRect(this.x, this.y, endX, endY);
	}
});
console.log( "Rectangle class loaded" );