console.log( "Point class loading." );

var Point = Base.extend({
  constructor: function( x, y ) {
    this.x = x;
    this.y = y;
    console.log( "Point constructor loaded." );
  },

  getY: function() {
    return this.y;
  },
  
  getX: function() {
    return this.x;
  }
});

console.log( "Point class loaded." );