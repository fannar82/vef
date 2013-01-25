var Rectangle = Shape.extend({
	  constructor: function(x,y) {
	    this.base(x,y);
	  },
	  
	  setEnd: function ( x, y ) {
		endX = x - canvas.offsetLeft - this.x;
		endY = y - canvas.offsetTop - this.y;
		
	  },

	  draw: function() {
		context.fillStyle = "blue";
		context.fillRect(this.x, this.y, endX, endY);
	}
});
