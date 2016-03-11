// block object constructor
var Block = function(color, imgsrc) {
	this.color = color;
	this.imgsrc = imgsrc;
};

// block objects
var green = new Block('green', 'assets/green.png');
var blue = new Block('blue', 'assets/blue.png');
var red = new Block('red', 'assets/red.png');
var yellow = new Block('yellow', 'assets/yellow.png');
var purple = new Block('purple', 'assets/purple.png');

// jquery code
$(document).ready(function() {
	$('img').click(function() {
		$(this).effect('explode');
	});
});