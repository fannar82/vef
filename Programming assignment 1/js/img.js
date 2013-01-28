console.log( "Image class loading." );

var Img = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y );

		context.beginPath();

		console.log( "img constructor loaded." );
	},

	iAm: "Image",
	  
	setEnd: function ( x, y ) {
		// Intentionally left blank.
	},

	draw: function() {
		img = new Image();
		img.src = 'img/hr.jpg';
		context.drawImage(img, startX, startY);
	},

	drawWatermark: function  () {
		
	}
});
console.log( "Image class loaded." );