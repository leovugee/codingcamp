var question = "You can see me in water, but I never get wet. What am I?";
var answer = prompt(question);
var correctAnswer = "reflection";
var finishMessage = "you got it";

while (answer.toLowerCase() != correctAnswer){

	if( confirm("No,do you give up!")){
		finishMessage = "too bad, the answer is " + correctAnswer;
		answer = correctAnswer; 
	} else  {
		answer = prompt("then what is the Right answer?");

	}
}
alert(finishMessage);



