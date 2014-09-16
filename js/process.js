//    script for process of adulteration - a module of the Virchemy
//    virchemy - A virtual chemistry lab simulator
//    Copyright (C) 2014  HirakJyoti Sarma

//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU Affero General Public License as
//    published by the Free Software Foundation, either version 3 of the
//    License, or (at your option) any later version.

//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU Affero General Public License for more details.

//    You should have received a copy of the GNU Affero General Public License
//    along with this program.  If not, see <http://www.gnu.org/licenses/>.

//    You can contact me at <hirakjs9@gmail.com>

function what(id) {
	if(id == 0) {
		drawTestTube(0, 85, 0.5, 0.5, 0, true);
		score += 5;
	}

	if(id == 1) {
		var q = prompt("how much...?");
		console.log(q);

		if(q == 3) {// put milk
			drawTestTube(0, 85, 0.5, 0.5, 0, false, "#fff");
			score += 5;
		} else {
			alert("Hint: You need to take 3 mL of Milk.");
			reset();
		}
	}

	if(id == 3) {
		// drawWaterBath(200, 100, 1, 1, 0);
		// alert("Wait for 5 minutes...");
		document.getElementById('incubate-btn').innerHTML = "Waiting...";
		setTimeout(function(){
			alert("Incubation completed. Now kept the Test Tube for cooling.");
			document.getElementById('incubate-btn').innerHTML = "Incubate";
		}, 10000);

		// clearInterval(wait);
		
	}

	if(id == 4) {
		document.getElementById('cool-btn').innerHTML = "Waiting...";
		setTimeout(function(){
			alert("The Test Tube have cooled.");
			document.getElementById('cool-btn').innerHTML = "Cool";
		}, 3000);
	}

	if(id == 2) {
		var q = prompt("how much...?");
		console.log(q);

		if(q == 2 || q == 3) {// put iodine
			var color = (sample == 0) ? "#ff0" : "#105";
			
			drawTestTube(0, 85, 0.5, 0.5, 0, false, color);
			score += 5;

			alert("Test Completed Successfully :-)");
			storeScore(name, score);
			result(color);
		} else {
			// do nothing
		}
	}			
}