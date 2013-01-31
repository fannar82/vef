console.log( "Freehand class loading." );

var Freehand = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y, color );
		console.log( "Freehand constructor loaded." );
	},

	allX: new Array(),
	allY: new Array(),
	  
	
	arrayX: function () {
		this.allX.push( this.getEndX() );
    	this.allY.push( this.getEndY() );
	},

	// draw: function() {
 //    	this.strokeLine( this.getEndX() , this.getEndY() );
    	
	// },

	draw: function () {
		var length = this.allX.length;
		for (var i = 0; i < length; i++) {
			this.strokeLine( this.allX[i], this.allY[i] );
		}
	},

	strokeLine: function ( x, y ) {
		context.strokeStyle = this.myColor;
    	context.beginPath();
    	context.lineTo( x, y );
    	context.stroke();
    	context.closePath();
	}
});
console.log( "Freehand class loaded." );