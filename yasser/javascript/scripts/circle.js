
var radius = 5;
var circumference = Math.round(2 * radius * Math.PI);
var area = Math.round(Math.pow(radius, 2) * Math.PI);

document.write("Circumference is " + circumference + " and Area is " + area + "<br>");


var tempcelsius = 21;
var tempfarenheit = 69.8;

var CtoF= tempcelsius*9/5+32;
var FtoC= (tempfarenheit-32)*5/9;
document.getElementsByClassName("test")[1].innerHTML = tempcelsius + " °C is " + CtoF + " °F";
document.getElementsByClassName("test")[2].innerHTML = tempfarenheit + " °F is " + FtoC +" °C";




function farenheit(cel) {
	return cel * 9 / 5 + 32;
}

window.alert(" Temptrature is " + farenheit(21) + " °F");

function celcius(faren) {

	return (faren-32) *5 /9;
}

window.alert(" Temptrature is " + celcius(69.8) + " °C")



function calculateage(yourbirth) {

	var age = 2017 - yourbirth;
	document.write("You are " + age + " years old")
}




for (var num=0; num<=10; num++){
	nume= num * 9;
	document.write(num + " * 9 = " + nume + "<br>")
}