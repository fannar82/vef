console.log( "Text class loading." );

var Text = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y );

		context.beginPath();

		console.log( "Text constructor loaded." );
	},

	iAm: "Text",
	  
	setEnd: function ( x, y ) {
		endX = x - canvas.offsetLeft;
		endY = y - canvas.offsetTop;
	},

	draw: function() {
		context.fillStyle = "blue";	
		context.font = "bold 16px Arial";
		context.fillText("Zibri", this.x, this.y);
	}
});
console.log( "Text class loaded." );