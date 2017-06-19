function plural() {
	var animal = prompt("Which animal do you want?");
	var num = prompt("how many animal do you want?");
	var string = "s";
	var plural1 =  animal.concat(string);

	if ((num == 1) || (animal == "sheep") || (animal == "geese")) {
        alert("You have " + num + " " + animal);
    } else {
        alert("You have " + num + " " + animal + "s");
    }
}

plural();

