function anagram(x,y) {
	var st = x.split("").sort().join("");
	var nd = y.split("").sort().join("");
	if ( st == nd ) {
		msg = "are";
	} else {
		msg = "are not";
	}
}
var msg = "";
var firstWord = (prompt("Insert the first word:")).toLowerCase();
var secondWord = (prompt("Insert the second word:")).toLowerCase();

if ( firstWord == secondWord ) {
	msg = "are not";
} else {
	anagram(firstWord,secondWord);
}

alert("The words " + msg + " anagram.");

