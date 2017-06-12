var cars = [" BMW ", " AUDI ", " MERCEDES ", " SEAT ", " VW ", " SKODA ", " LEXUS ", " FERRARI "];
		document.getElementById("demo").innerHTML = cars;

		function carsFunction() {
			cars.sort();
			document.getElementById("demo").innerHTML = cars;

			var i;
			var text = "";
			for(i = 0 ;i <cars.length ; i++) {
				text += "the Number #" + (i+1) + " is " + cars[i] + "<br>";
		}
			document.getElementById("demo").innerHTML = text;
	}

