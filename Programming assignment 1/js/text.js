console.log( "Text class loading." );

var Text = Shape.extend({
	constructor: function( x, y, color, thickness, canvas, tool ) {
		this.base( x, y, color, thickness, canvas, tool );
		this.txtSize = thickness * 5;
		this.txtFont = "Arial";
		this.txtStyle = "bold";
		this.txtSettings = this.txtStyle + " " + this.txtSize + "px " + this.txtFont;
		this.y = this.y + this.txtSize; // Move the text down so it appears
										// where the textinputbox was located.
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
		this.context.fillText(text, this.getX(), this.getY() );
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

        console.log( "TextX=" + this.getX() + ", TextY=" + this.getY() );
        console.log( "TextW=" + width + ", TextH=" + height );
        console.log( "TextEndX=" + this.getEndX() + ", TextEndY=" + this.getEndY() );


    	if ( x > this.getX()-margin && x < this.getEndX()+margin &&
    		 y > this.getEndY()-margin && y < this.getY()+margin )
    	{
            this.selected = (!this.selected);
			console.log( "Text selected: " + this.selected );
        }
	}
});
console.log( "Text class loaded." );