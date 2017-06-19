var question = "What has a head and a tail, but no body?";
var answer = prompt(question);
var correctAnswer = "coin";
var finishMessage = "you are smart";


while (answer.toLowerCase() != correctAnswer){

	if (confirm("did you give up!!\n" + question)){
		finishMessage = "stuped guy this is the answer : " + correctAnswer;
		answer = correctAnswer;
		}else {
		answer = prompt("so what is the correct answer again" );
	}
}	
alert(finishMessage);
