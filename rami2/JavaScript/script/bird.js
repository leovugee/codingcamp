var animals = ["cat", "dog", "lion", "bird", "ant"];
var guessAnimal = "bird";

for (i = 0; animals.length > i; i++) {
	if (guessAnimal == animals[i]) {
		break;
	}
}

alert("i fund the " + animals[i] + ". it was the animal n. " + i );

