// block objects
var green = {
	img: "assets/green.png"
};
var blue = {
	img: "assets/blue.png"
};
var red = {
	img: "assets/red.png"
};
var yellow = {
	img: "assets/yellow.png"
};
var purple = {
	img: "assets/purple.png"
};

$(document).ready(function() {
	$('img').click(function() {
		$(this).effect('explode');
	});
});