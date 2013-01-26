console.log( "Shape class loading." );

var Shape = Base.extend({
  constructor: function( x,y ) {
    this.x = x;
    this.y = y;
    console.log( "Shape constructor loaded." );
  },
   
  getY: function() {
    return this.y;
  },
  
  getX: function() {
    return this.x;
  },
  
  setEnd: function ( x, y ) {
	console.log( "SetEnd Not Implemented In Derived Class");
  },

  draw: function() {
  	console.log("Draw Not Implemented In Derived Class ")
  }
});

console.log( "Shape class loaded." );