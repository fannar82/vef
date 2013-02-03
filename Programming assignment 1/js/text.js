console.log( "Text class loading." );

var Text = Shape.extend({
	constructor: function( trunk ) {
		this.base( trunk );
		this.txtSize = this.thickness * 5;
		this.txtFont = "Arial";
		this.txtStyle = "bold";
		this.txtSettings = this.txtStyle + " " + this.txtSize + "px " + this.txtFont;
		console.log( "Text constructor loaded." );
	},

	isText: true,
	message: "",

	draw: function() {
		// Deliberatly empty.
	},

	drawText: function ( text ) {
		if ( text === "" ) {
			text = this.message;
		}
		else {
			this.message = text ;	
		}
		this.context.fillStyle = this.myColor;	
		this.context.font = this.txtSettings;

		var tempY = this.y + this.txtSize; // Move the text down so it appears
										   // where the textinputbox was located.

		this.context.fillText(text, this.getX(), tempY );
	},

    select: function ( x, y, margin ) {
    	// Fix position from last coordinates of the mouse
    	// so the object moves with the mouse.
    	x = x - this.canvas.offsetLeft;
    	y = y - this.canvas.offsetTop;

   		// Thanks go to: http://www.html5canvastutorials.com/tutorials/html5-canvas-text-metrics/
     	this.context.font = this.txtSettings;
     	var metrics = this.context.measureText(this.message);
  		var width = metrics.width;
  		var height = this.txtSize;

  		this.endX = this.getX() + width;
  		this.endY = this.getY() - (height / 2);

    	if ( x > this.getX()-margin && x < this.getEndX()+margin &&
    		 y > this.getEndY()-margin && y < this.getY()+margin )
    	{
            this.selected = (!this.selected);
			console.log( "Text selected: " + this.selected );
        }
	}
});
console.log( "Text class loaded." );