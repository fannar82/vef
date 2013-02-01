console.log( "Watermark class loading." );

var Watermark = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y );
		console.log( "Watermark constructor loaded." );
	},

	draw: function() {
		console.log("Adding watermarkRu");
		context.save();
		var watermarkRu = new Image();
		watermarkRu.src = 'img/hr.jpg';
		context.globalAlpha = 0.2;
		posLeft = canvas.width - watermarkRu.width;
		context.drawImage(watermarkRu, 0, 0);	
		//context.globalAlpha = 1;
		context.restore();
		console.log("Added watermarkRu");
	}
});
console.log( "Watermark class loaded." );