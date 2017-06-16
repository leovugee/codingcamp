var teams = ["real", "barca", "manchester", "roma", "chelsea"];
document.getElementById("test").innerHTML = teams;

function myFun() {
	teams.sort();
	document.getElementById("test").innerHTML = teams;

	var text = "";
	var i;
	for (i = 0; i <teams.length ; i++){
		text += "the number # " + (i+1) + " is " + teams[i] + "<br>";
	}
	document.getElementById("test").innerHTML = text;
}


