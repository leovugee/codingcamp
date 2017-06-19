var cars = ["ford","ferrari","fiat","bmw","ww","mercedis","opel","audi","seat"]
document.getElementById("demo").innerHTML = cars;

function autoCars() {
	cars.sort();
	document.getElementById("demo").innerHTML = cars;
}