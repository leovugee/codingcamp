function calculateDogAge(puppyAge) {
	var dogAge;
	dogAge = puppyAge * 7;
	console.log("Your doggie is " + dogAge + " years old in dog years!");
}

calculateDogAge(2);
calculateDogAge(3);
calculateDogAge(4);

function myDogAge() {
	var x = document.getElementById("myAge").value;
	document.getElementById("demo").innerHTML = "Your Age Is " + (x/7) + " By Dog Age."
}
