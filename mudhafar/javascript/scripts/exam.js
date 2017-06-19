function average(notes) {

	for ( i=0 ; i<notes.length ; i++ ) {

	sum += parseInt(notes[i]);

	}

	return sum / notes.length;

}

function grade(avg) {

	switch (avg) {

		case 1:
		case 2:
		case 3:

			msg = "Super";
			break;

		case 4:
		case 5:

			msg = "Good";
			break;

		case 6:

			msg = "Bad";
			break;

	}

}

var sum = 0;
var msg = "";
var notes = [];

for ( i=0 ; i<3 ; i++ ) {

	notes.push(prompt("Insert your note (1-6) of exam no." + (i+1) + ":"));

}
var avg = average(notes);

grade(avg);

alert("Your Average Note Is: " + avg + " And That Is " + msg + ".");