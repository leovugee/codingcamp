var cel = 31;
var far = 28;

function toCel(far) {
	return (far - 32) *5 - 9;
}

function toFar(cel) {
	return (cel * 9) /5 + 32;
}

document.getElementsByClassName("test")[1].innerHTML = cel + "°C is " + toFar(cel) + "°F"; 
document.getElementsByClassName("test")[2].innerHTML = far + "°F is " + toCel(far) + "°C"; 

