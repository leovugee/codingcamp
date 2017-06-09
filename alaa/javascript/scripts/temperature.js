function toCelcius(fahrenheit) {
	var celcius ;
	celcius = (5/9)*(fahrenheit - 32);
	return celcius;
}

var fahrenheit ;
fahrenheit = 10 ;
var c = toCelcius(fahrenheit)

document.write("the temperature °C =  " + c) ;

function tofahrenheit(celicius) {
	var fahrenheit ;
	fahrenheit = (9/5*celcius + 32);
	return fahrenheit ;
}
var celcius = -12.22;
 
 var f = tofahrenheit(celcius) ; 
 document.write("the temperature °F = " + f) ; 