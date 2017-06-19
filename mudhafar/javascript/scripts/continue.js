var animals = ["dog", "cat", "lion", "fox", "unicorn","wolf", "cheetah"];

var showMessage = document.getElementById("message");

var showArray = document.getElementById("array");

var arrayText = "";

var message = "";

for (i=0; i<animals.length; i++) {

	arrayText += animals[i] + "  ";

	}

showArray.innerHTML = arrayText;

function check() {

	var guessAnimal = document.getElementById("guess").value.toLowerCase();

	for (i=0; i<animals.length; i++) {

		if (animals[i] == guessAnimal) {

			continue;

		}

		message += "I found the " + animals[i] + ", it was the animal number " + (i+1) + "<br>";

	}

	showMessage.innerHTML = message;

}