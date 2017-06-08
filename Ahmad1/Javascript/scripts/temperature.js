var fahrenheit = 100;
var celsius = 32;

function toFar(c){
	return c * 9 / 5 +32;
	
}

function toCel(f){
	return (f - 32) * 5/9;
}

document.getElementsByClassName("test")[1].innerHTML = " converting from " + celsius + " celsius to " + toFar(celsius) +" fahrenheit";
document.getElementsByClassName("test")[2].innerHTML =" converting from " + fahrenheit + " fahrenheit to " + toCel(fahrenheit) +" celsius";