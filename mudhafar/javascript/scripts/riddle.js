var riddle = "What comes down but never goes up?";
var correctAnswer = "Rain";
var isAnswerCorrect = false;
while (isAnswerCorrect == false) {
	var riddleAnswer = prompt(riddle);
	if (riddleAnswer.tolowercase() == correctAnswer.tolowercase()) {
		alert("Correct!");
		isAnswerCorrect = true;
	} else if (confirm("That was the wrong answer. Do you give up?")) {
		alert("Too bad. The correct answer is " + correctanswer + ".");
		isAnswerCorrect = true;
	}
}