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

// list of blocks
var blockList = [green, blue, red, yellow, purple];

// grid object constructor
var GridSquare = function(x, y, block) {
	this.x = x;
	this.y = y;
	this.block = block;
};

// create grid column
var column1 = [];
for (var i = 1; i < 13; i ++) {
	var square = new GridSquare(1, i, green);
	column1.push(square);
}


// jquery code
$(document).ready(function() {
	$('img').click(function() {
		$(this).effect('explode');
	});
});