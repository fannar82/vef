console.log( "Image class loading." );

var Img = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y );
		console.log( "img constructor loaded." );
	},

	draw: function() {
		img = new Image();
		img.src = 'img/hr.jpg';
		context.drawImage(img, this.getX(), this.getY() );
	}

});
console.log( "Image class loaded." );