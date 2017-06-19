var cels = 35;
var fahrenheit = 72;

function toFah(c) {
	return Math.round((c - 32) * 5/9);
}

function toCel(f) {
	return (f * 9)/5 + 32;
}
document.getElementsByClassName("test")[1].innerHTML = " Converting from " + fahrenheit + " C to " + toFah(fahrenheit) + " F";
document.getElementsByClassName("test")[2].innerHTML = " Converting from " + cels + " C to " + toCel(cels) + " F";
	
