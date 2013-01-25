var Circle = Shape.extend({
	  constructor: function(x,y) {
	    this.base(x,y);
	  },
	  
	  setEnd: function ( x, y ) {
		endX = x - canvas.offsetLeft - this.x;
		endY = y - canvas.offsetTop - this.y;
		
	  },

	  draw: function() {
		context.beginPath();
		context.arc(200, 200, 50, 0 , 2 * Math.PI);
		context.fillStyle = color;
		context.closePath();
		context.fill();
	}
});
 