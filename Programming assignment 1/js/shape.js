console.log( "Shape class loading." );

var Shape = Base.extend({
  constructor: function( x, y, selectedColor ) {
    this.x = x;
    this.y = y;
    this.myColor = selectedColor,
    console.log( "Shape constructor loaded." );
  },

  endX: 0,
  endY: 0,
  selected: false,
   
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
  },

  setStart: function ( x, y ) {
    this.x = x;
    this.y = y;
  },

  draw: function() {
  	console.log("Draw Not Implemented In Derived Class ");
  },

  move: function ( x, y ) {
      console.log( "Moving Shape object." );
      this.x = this.x + x;
      this.y = this.y + y;
      this.endX = this.endX + x;
      this.endY = this.endY + y;
      console.log( "Shape object moved." );
    }
});

console.log( "Shape class loaded." );