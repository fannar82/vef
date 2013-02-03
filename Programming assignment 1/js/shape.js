console.log( "Shape class loading." );

var Shape = Base.extend({
  constructor: function( trunk ) {
    this.x = trunk.startX;
    this.y = trunk.startY;
    this.myColor = trunk.color;
    this.thickness = trunk.thickness;
    this.canvas = trunk.canvas;
    this.context = this.canvas.getContext("2d");
    console.log( "Shape constructor loaded." );
    this.tool = trunk.tool;
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
    this.endX = x - this.canvas.offsetLeft;
    this.endY = y - this.canvas.offsetTop;
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
    },

    select: function () {
      console.log( "Select not implemented in derived class." );
    }
  });

console.log( "Shape class loaded." );