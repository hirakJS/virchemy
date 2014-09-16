var c = document.getElementById('mycanvas');
var ctx = c.getContext("2d");

function reset() {
	c.width = c.width;
}

// reset();

function result(color) {
	ctx.font = "30px Arial";
	ctx.textBaseline = "middle";
	ctx.fillStyle = color;
	if(color == "#ff0")
		ctx.fillText("Test result +ve. i.e. Your Milk sample has no Starch.", 15, 15);
	else
		ctx.fillText("Test result -ve. i.e. Your Milk sample has Starch as Adulterate.", 15, 15);

	ctx.fillStyle = "#333";
	ctx.fillText("You have scored "+ localStorage.getItem(name), 15, 60);
}

function drawTestTube(tx, ty, sx, sy, theta, empty, color) {
	reset();
	// transformation
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.translate(tx, ty);
	ctx.scale(sx, sy);
	ctx.rotate(theta);

	if(empty == false) {
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(500, 400, 30, 0, Math.PI, false);
		ctx.fill();
		ctx.fillRect(470, 350, 60, 50);
		ctx.closePath();
	}
	
	ctx.beginPath();
	ctx.arc(500, 400, 30, 0, Math.PI, false);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(470, 400);
	ctx.lineTo(470, 150);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(530, 400);
	ctx.lineTo(530, 150);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(465, 150, 5, 0, Math.PI * 1.6, true);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.arc(535, 150, 5, Math.PI * 1.4, Math.PI * 1, true);
	ctx.stroke();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(468, 145);
	ctx.lineTo(532, 145);
	ctx.stroke();
	ctx.closePath();
}

function drawWaterBath(tx, ty, sx, sy, theta) {
	// reset();

	var x = 100,
		y = 100,
		radius = 150;

	// transformation
	// ctx.setTransform(1, 0, 0, 1, 0, 0);
	ctx.translate(tx, ty);
	ctx.scale(sx, sy);
	ctx.rotate(theta);

	ctx.fillStyle = "rgb(127, 121, 108)";

	ctx.beginPath();
	ctx.arc(x + radius, y + 100, radius, Math.PI * 0.5, Math.PI * 1, false);
	ctx.arc(x + radius + 100, y + 100, radius, 0, Math.PI * 0.5, false);
	ctx.fill();
	ctx.closePath();

	ctx.beginPath();
	ctx.moveTo(x + radius, y + radius + 100);
	ctx.lineTo(x + radius + 100, y + radius + 100);
	ctx.fill();
	ctx.closePath();
}

// function quantity(id) {
	// console.log(id);
	// var unit = ['', 'mL', 'drop'];
	// if(id > 0) {
	// 	var ul_el = document.getElementById('quantity');

	// 	for (var i = 0; i < 5; i++) {
	// 		var li_el = document.createElement("li");
	// 		var n = i + 1;
	// 		li_el.innerHTML = n + unit[id];
	// 		ul_el.appendChild(li_el);
	// 	}
	// }
// }