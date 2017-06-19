function calculate() {
	var y =document.getElementById("mytext").value;
	var x = 0;
	var message = "";
	for(x = 0; x <= 10; x++ ) {
		result = x * y ;
		message += y + " * " + x +" = " + result + "<br>";
	}

	document.getElementById("demo").innerHTML = message;
}