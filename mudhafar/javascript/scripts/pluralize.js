var animalName = prompt("Which animal do you want?");
var animalNumber = prompt("How many " + animalName + "s do you want?");
function pluralize(animal,number) {
	if ((number == 1) || (animal == "sheep") || (animal == "geese")) {
		alert("You have " + number + " " + animal);
	} else {
		alert("You have " + number + " " + animal + "s");
	}
}
pluralize(animalName,animalNumber);
