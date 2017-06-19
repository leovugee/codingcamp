var cars = ["ford","ferrari","fiat","bmw","vw","mercedis","opel","audi","seat"];
cars.sort();

function autoCars() {

	var text = "";

	for(var i = 0; i < cars.length; i++ ) {
		text += "the number " + (i+1) + " is " + cars[i] + "<br>";
	}

	document.getElementById("demo").innerHTML = text ;
}