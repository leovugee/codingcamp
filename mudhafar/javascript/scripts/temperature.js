var celesius = 30;
var fahrenheit = 86;
var toCelesius = (fahrenheit - 32) * 5 / 9;
var toFahrenheit = celesius * 9 / 5 + 32;
//var messageC2F = celesius + "°C is " + toFahrenheit + "°F";
//var messageF2C = fahrenheit + "°F is " + toCelesius + "°C";
var x = document.getElementsByClassName("test");
function c2f(c) {
	return c * 9 / 5 + 32;
}
function f2c(f) {
	return (f - 32) * 5 / 9;
}
x[1].innerHTML = celesius + "°C is " + c2f(celesius) + "°F";
x[2].innerHTML = fahrenheit + "°F is " + f2c(fahrenheit) + "°C";

//x[1].innerHTML = messageC2F;
//x[2].innerHTML = messageF2C;
//console.log(messageC2F);
//console.log(messageF2C);