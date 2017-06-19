var cars = ["bmw", "fiat", "benz", "kia","pride"];
var text = " ";
for (i = 0; i < cars.length ; i++) {
	text = text + "the car number " + (i + 1) + " is " + cars[i] + "<br>";
}
document.write(text) ; 