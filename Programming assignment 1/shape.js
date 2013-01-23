console.log( "Shape class loading." );

//var shape = new Object();

function Shape( x, y ){
	// Initialize the shape to x=0 and y=0.
	
	var m_x = ( x === undefined ) ? 0 : x;
	var m_y = ( y === undefined ) ? 0 : y;

	this.draw() = function(){
		// Empty, is abstract and
		// should be overloded in
		// derived "classes"!
	}

	this.getX = function(){
		return m_x;
	}

	this.getY = function(){
		return m_y;
	}
}
var shape = new Shape();

console.log( "this.x = " + this.x );
console.log( "shape.getX = " + shape.getX() );

console.log( "Shape class loaded." );