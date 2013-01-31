console.log( "Text class loading." );

var Text = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y, color );
		console.log( "Text constructor loaded." );
	},

	isText: true,
	message: "",

	draw: function() {
		// Deliberatly empty.
	},

	drawText: function ( text ) {
		if (text == "") {
			text = this.message;
		}
		else {
			this.message = text ;	
		}
		context.fillStyle = this.myColor;	
		context.font = "bold 16px Arial";
		context.fillText(text, this.getX(), this.getY() );
	}
});
console.log( "Text class loaded." );