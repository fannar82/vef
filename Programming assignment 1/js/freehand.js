console.log( "Freehand class loading." );

var Freehand = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y, color );
		this.allX = [];
		this.allY = [];
		console.log( "Freehand constructor loaded." );
	},

	arrayX: function () {
		this.allX.push( this.getEndX() );
    	this.allY.push( this.getEndY() );
	},

	draw: function () {
		var length = this.allX.length;
		context.beginPath();
		for (var i = 0; i < length; i++) {
			this.strokeLine( this.allX[i], this.allY[i] );
		}
	},

	strokeLine: function ( x, y ) {
		context.strokeStyle = this.myColor;
    	context.lineTo( x, y );
    	context.stroke();
    	
	}
});
console.log( "Freehand class loaded." );