var fah = 10;
var cel = 20;

function toCel(fah) {
	return (fah - 32) * 5 / 9;
}

function toFah(cel) {
	return (cel * 9) / 5 + 32;
}


document.getElementsByClassName("test")[1].innerHTML = cel + "°C is " + toFah(cel) + "°F ";
document.getElementsByClassName("test")[2].innerHTML = fah + "°F is " + toCel(fah) + "°C ";

