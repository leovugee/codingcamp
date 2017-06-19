var message;
function alertHi(x) {
	if ( x == "ger" ) {
		message = "Hallo";
	} else if ( x == "eng" ) {
		message = "Hello";
	} else if ( x == "ita" ){
		message = "Ciao";
	}
	alert(message);
}