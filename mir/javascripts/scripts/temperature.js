/* var c = 21 ;
var f = 69.8 ;
var nnc =  ( f - 32 ) * 5 / 9 ;
var nnf = c * 9 / 5 + 32 ;



document.getElementsByClassName("test")[1].innerHTML = "°C is °F =  " + nnc ;
document.getElementsByClassName("test")[2].innerHTML = "°F is °C = " + nnf ; */

function toCelcius (p1){
	return (p1-32) * 5 / 9 ;
}

document.write("first function is = " + toCelcius(69.8));

function toFar (b1) {
	return(b1 * 9 / 5 + 32 ) ;
}
	document.write("<br>" + "secound function is =" + toFar(21));
