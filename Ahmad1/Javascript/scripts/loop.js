function multiplication() {
	var multiplier = document.getElementById("we").value;
	var total = 10;
	var message  = "";

	for(var i = 0; i <= total; i++) {
		var result  = multiplier * i;
		message = message + i + " * " + multiplier + " = " + result +"<br>";

	}
	document.getElementById("demo").innerHTML = message;
}