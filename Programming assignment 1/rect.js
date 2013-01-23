function Rectangle ( x, y ) {

	//Rectangle class	
	var m_x = ( x === undefined ) ? 0 : x;
	var m_y = ( y === undefined ) ? 0 : y;

	var m_dx;
	var m_dy;

	// this.draw() = function(){
	// 	// Empty, is abstract and
	// 	// should be overloded in
	// 	// derived "classes"!
	// }

	this.getX = function(){
		return m_x;
	}

	this.getY = function(){
		return m_y;
	}
		// // "offsetX/offsetY" works in Chrome and Opera
		// x = e.offsetX; //e.pageX - this.offsetLeft;
		// y = e.offsetY; //e.pageY - this.offsetTop;


	function setDelta ( x, y ) {
		console.log("bx= " + x + " by= " + y);
		m_dx = x - this.offsetLeft - m_x ;
		m_dy = y - this.offsetTop - m_y;
	}

	function draw () {
		context.fillStyle = "blue";
		context.fillRect(m_x, m_y, m_dx, m_dy);
	}

	console.log('x = ' + m_x);
	console.log('y = ' + m_y);
	console.log('dx = ' + m_dx);
	console.log('dy = ' + m_dy);
}