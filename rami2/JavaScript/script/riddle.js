var answer = prompt("You can't keep this until you have a given it");
var correct = "promise";
var winMessage = "goooood";

while (answer != correct){ 
	if (confirm("do you want try again !!!")) {
		prompt("You can't keep this until you have a given it");

		

	} else {
		winMessage = "the answer is: " + correct;
		answer = correct;
}

}
alert(winMessage);