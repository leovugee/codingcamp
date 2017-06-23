var msg = "";

var array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

document.getElementById("array").innerHTML = "Array : " + array.join();

function calculate() {

	var target = parseInt(document.getElementById("target").value);

	for (var i = 0; i < array.length; i++) {

		var x = target - array[i];

		for (var j = 0; j < array.length; j++) {
			
			if ( array[j] == x ) {

				msg += " [ " + array[i] + " , " + array[j] + " ] ";

			}

		}

	}

	if ( msg == "" ) {

		msg = "There is no results for your given target."

	}

	document.getElementById("result").innerHTML = msg;
}










