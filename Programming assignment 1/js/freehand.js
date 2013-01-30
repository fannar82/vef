console.log( "Freehand class loading." );

var Freehand = Shape.extend({
	constructor: function( x, y ) {
		this.base( x, y, color );
		context.beginPath();
		console.log( "Freehand constructor loaded." );
	},

	//iAm: "Freehand", // Delete at next code cleanup.
	allX: new Array(),
	allY: new Array(),
	  
	setEnd: function ( x, y ) {
		endX = x - canvas.offsetLeft;
		endY = y - canvas.offsetTop;
	},

	draw: function() {
    	this.strokeLine( endX, endY );
    	this.allX.push(endX);
    	this.allY.push(endY);
	},

	redraw: function () {
		context.beginPath();
		var length = this.allX.length;
	    //currPoint = null;
		for (var i = 0; i < length; i++) {
			this.strokeLine( this.allX[i], this.allY[i] );
			//console.log( "currPoint: " + currPoint );
			//console.log( "currX: " + this.allX[i] + ", currY: " +  this.allY[i] );
		}
	},

	strokeLine: function ( x, y ) {
		context.strokeStyle = this.myColor;
    	context.lineTo( x, y );
    	context.stroke();
	}
});
console.log( "Freehand class loaded." );