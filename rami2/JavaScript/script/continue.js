var cars = ["volvo", "bmw", "rino", "hummer", "ford"];
var spiCar = "rino";

for (i = 0; cars.length > i; i++) {
	if (spiCar == cars[i]) {
		continue;
	}
	console.log("the car is " + cars[i] );
}

