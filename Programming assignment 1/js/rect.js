console.log( "Rectangle class loading." );

var Rectangle = Shape.extend({
	constructor: function( x, y ) {
		this.base(x, y, color);
		console.log( "Rectangle constructor loaded." );
	},

	draw: function() {
		context.strokeStyle = this.myColor;
		context.strokeRect(this.getX(), this.getY(), this.getEndX() - this.getX() , this.getEndY() - this.getY() );
	}
});
console.log( "Rectangle class loaded" );