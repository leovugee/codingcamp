var result ="enter the result of the exam from 1 to 6  ";
var exam = 3
var numExam = [];

	for (var i = 0; i < exam; i++){
		numExam.push(parseInt(prompt(result + "# " + (i + 1))));
	}
	alert("your total result " + numExam.join(", "));	
function avarge () {
	var x = 0;
	for (var i=0;i<numExam.length;i++) {
		x = x + numExam[i];}
		var divide = x/numExam.length;
		alert("your averge is: " + Math.round(divide));
	}


function lastResult(avg) {
	var grade = "";
	switch (avg) {
		case 1:
		case 2:
		case 3:
			grade="good";
			break;
		case 4:
		case 5:
			grade="bad";
			break;
		case 6:
			grade="very bad";		
	}
	return grade;
}
alert("your grade is: " + lastResult(avarge()));
