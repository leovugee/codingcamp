function averageVotes(votes) {
	totalVotes = 0;
	for (var i = 0; i < votes.length; i++){
		totalVotes += votes[i];
	}

	return avg = totalVotes/votes.length;

}

function getGrade(avg){
	var grade = "";
	
	switch (avg) {
		case 1:
		case 2:
		case 3:
			grade = "Good";
			break;
		case 4:
		case 5:
			grade = "Bad";
			break;
		case 6:
			grade = "Scheisse";
			break;
	}
	return grade;
}

var i = 0;
var votes = [];
while (i < 3) {
	votes.push(parseInt(prompt("Insert the vote of the exam nuber (1 to 6): " + (i+1))));
	i++;
}


var roundedAvg = Math.round(averageVotes(votes));
alert("Your final grade is " + getGrade(roundedAvg));