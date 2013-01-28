console.log( "Watermark class loading." );

var Watermark = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y );

		context.beginPath();

		console.log( "Watermark constructor loaded." );
	},

	iAm: "Watermark",
	  
	setEnd: function ( x, y ) {
		// Intentionally left blank.
	},

	draw: function() {
		console.log("Adding watermarkRu");
		watermarkRu = new Image();
		watermarkRu.src = 'img/hr.jpg';
		context.globalAlpha = 0.2;
		posLeft = canvas.width - watermarkRu.width;
		context.drawImage(watermarkRu, 0, 0);	
		context.globalAlpha = 1;
		console.log("Added watermarkRu");
	}
});
console.log( "Watermark class loaded." );