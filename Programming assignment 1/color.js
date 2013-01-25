var color;
$("#red").click(selectedColor("red"));
$("#blue").click(selectedColor("blue"));

function selectedColor (color) {
	this.color = color;
}