		// A Cursor fix for Chrome:
	document.onselectstart = function(){ 
		return false; 
	};
	
	//Main drawingboard functions.
	var wb = function(){}; // "Whiteboard", the global guy.
		wb.currentShape;
		wb.selectTickness = $("#selectTickness");
		wb.thickness = "1";
		wb.canvas = document.getElementById("drawing-board");
		wb.context = wb.canvas.getContext("2d");
		wb.tool = "rectangle"; // Start up with this shape.
		wb.color = "red"; // Start up with this color.
		wb.whiteBoards = new Array(); // Array of arrays with the drawings.
		wb.currWB = 0; // Number of the current whiteboard
		wb.shapesRedo = new Array(); // Undo actions sent here. Creats possibility for redo.
		wb.mouseIsDown = false; // For mouse movements gestures.
		wb.textinput = $("#textinput"); // Fetch the text input field.
		wb.undo = $("#undo"); // Fetch the undo button.
  		wb.mouseCurrX = null; // For moving objects on canvas.
  		wb.mouseCurrY = null; // For moving objects on canvas.
  		wb.margin = 10; // Margin for select.
  		wb.loadArray = [];
	
	// Create an array of four whiteboards
	for (var i=0; i<4;i++) {
		var shapesArray = new Array(); // Objects put here and removed on undo.
		wb.whiteBoards.push( shapesArray );
	}

	function updateToolColor(){
		$("#whatTool").text("Selected tool: " + wb.tool);
		$("#whatColor").text("Selected color: " + wb.color);
	}

	updateToolColor();

	// Hide the textarea when page loads
	wb.textinput.hide();
	
	$(wb.canvas).mousedown( function(e) {
		// If Ctrl is pressed, selection is in progress
		// and no shape sholud be drawn.
		if ( e.ctrlKey ) {
			// 1. Finna hvort það sé hlutur í arrayinu sem
			//    er í sama punkti. Þ.e. renna í gegnum arrayið
			//    í öfuga átt og athugað hvort stakið sé á
			//    þeim punkti.

			// Í freehand, það sem er klikkað færðu X og
			// Y gildi sem þú getur borið saman við X og
			// Y gildin sem eru í Point array
			for (var i = 0; i < wb.whiteBoards[wb.currWB].length; i++) {
		  		wb.whiteBoards[wb.currWB][i].select( e.pageX, e.pageY, wb.margin );
			}
		}
		else {
			// Set starting point (different shapes might
			// treat "starting point" differently)
			// StartX,Y fixes browser compability
			startX = e.pageX - this.offsetLeft;
			startY = e.pageY - this.offsetTop;

			var trunk = function() {}
				trunk.startX = startX
				trunk.startY = startY;
				trunk.color = wb.color;
				trunk.thickness = wb.thickness;
				trunk.canvas = wb.canvas;
				trunk.tool = wb.tool;

			// Select shape to draw
			// Crockford hatest switch,
			// but we know how to use "break;"
			// so we love it ;-)
			switch (wb.tool) {
				case "rectangle":
					wb.currentShape = new Rectangle( trunk );
					break;
				case "circle":
					wb.currentShape = new Circle( trunk );
					break;
				case "freehand":
					wb.currentShape = new Freehand( trunk );
					break;
				case "line":
					wb.currentShape = new Line( trunk );
					break;
				case "text":
					wb.textinput.show();
					wb.textinput.offset({ left: e.pageX, top: e.pageY });
					wb.textinput.focus();
					wb.currentShape = new Text( trunk );
					break;
				case "img":
					wb.currentShape = new Img( trunk );
					break;
				// Not used in this version
				// case "watermark":
					//wb.currentShape = new Watermark( 0, 0 );
					//break;
			}

			// The mouse has been pressed
			wb.mouseIsDown = true;
		}
	});

	$(wb.canvas).mousemove( function(e) {
		if ( wb.mouseIsDown === true ){
			if( wb.tool === "freehand" ) {
				wb.currentShape.setEnd( e.pageX, e.pageY );
				wb.currentShape.arrayX();
				wb.currentShape.draw();
	  		}
	  		else{ // Show shapes as they are being created
				wb.context.clearRect(0, 0, wb.canvas.width, wb.canvas.height);
				wb.currentShape.setEnd( e.pageX, e.pageY );
				wb.whiteBoards[wb.currWB].push(wb.currentShape);
				redraw(wb.whiteBoards[wb.currWB]);
				wb.whiteBoards[wb.currWB].pop();
	  		}
	  	}

	  	// Move selected objects
	  	if ( wb.whiteBoards[wb.currWB].length > 0 && e.shiftKey ) {
			for (var i = 0; i < wb.whiteBoards[wb.currWB].length; i++) {
				if ( wb.whiteBoards[wb.currWB][i].selected === true )
				{
		  			wb.whiteBoards[wb.currWB][i].move( e.pageX - wb.mouseCurrX, e.pageY - wb.mouseCurrY );
		  		}
			}
			wb.context.clearRect(0, 0, wb.canvas.width, wb.canvas.height);
			redraw(wb.whiteBoards[wb.currWB]);	
	  	}

	  	// Position the mouse for next move.
	  	wb.mouseCurrX = e.pageX;
	  	wb.mouseCurrY = e.pageY;
	});
	
	$(wb.canvas).mouseup( function(e) {
		// If Ctrl is pressed, selection is in progress
		// and no shape sholud be drawn.
		if ( !e.ctrlKey ) {
			wb.currentShape.setEnd( e.pageX, e.pageY );
			wb.currentShape.draw();

			// If this is text, then it should only be
			// added when the textbox retrives an Enter,
			// see "wb.textinput.keypress" function.
			if ( wb.currentShape.iAm != "Text" ) {
				addToShapesArray( wb.currentShape );
			};
 
			// The mouse is no longer pressed
			wb.mouseIsDown = false;
		}
	});

	// Listener to wb.textinput
	wb.textinput.keypress( function(e) {
		// If Enter is pressed, hide the textarea again
		// and draw it's contents to the canvas.
    	if(e.keyCode === 13 && !e.shiftKey){
    		wb.currentShape.drawText( wb.textinput.val() );
    		wb.textinput.hide();
    		wb.textinput.val(''); // Clear textarea for next use
    		console.log("Enter has been pressed.");

    		addToShapesArray( wb.currentShape );
      	}
	});

	$(wb.undo).click( function() {
		makeUndo();
	});

	$(document).keypress( function(e) {
		// If the textinput object is not loaded and 
		// Ctrl + Z is pressed - undo last action.
		// Works like a charm in Chrome, does not work in FireFox.
		if ( wb.tool != "text" ) {
			if( e.which === 26 && e.ctrlKey ){
				makeUndo( );
			}
		}
	});

	function addToShapesArray ( shape ) {
		// Push the shape to the array for later usage
		wb.whiteBoards[wb.currWB].push(wb.currentShape);
		console.log( "A shape was added to wb.whiteBoards[" + [wb.currWB] + "], current count: " + wb.whiteBoards[wb.currWB].length );
	}

	function makeUndo () {
		console.log("Starting undo.");

		wb.context.clearRect(0, 0, wb.canvas.width, wb.canvas.height);
		wb.shapesRedo.push(wb.whiteBoards[wb.currWB].pop());
		redraw(wb.whiteBoards[wb.currWB]);

		console.log("Undo done.");
	}