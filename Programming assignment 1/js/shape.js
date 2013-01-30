console.log( "Shape class loading." );

var Shape = Base.extend({
  constructor: function( x, y, selectedColor ) {
    this.x = x;
    this.y = y;
    this.myColor = selectedColor,
    console.log( "Shape constructor loaded." );
  },

	//iAm: "Lengend" ( http://www.imdb.com/title/tt0480249/ )
  iAm: "Undefined shape",
  endX: 0,
  endY: 0,
   
  getY: function() {
    return this.y;
  },
  
  getX: function() {
    return this.x;
  },

  getEndX: function() {
    return this.endX;
  },

  getEndY: function() {
    return this.endY;
  },
  
  setEnd: function ( x, y ) {
    this.endX = x - canvas.offsetLeft;
    this.endY = y - canvas.offsetTop;
  
   // console.log( "SetEnd Not Implemented In Derived Class");
  },

  draw: function() {
  	console.log("Draw Not Implemented In Derived Class ")
  }
});

console.log( "Shape class loaded." );