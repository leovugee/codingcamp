function greaterNum(a,b) {	
	if (a > b){
	document.write("The greater nuber of " + b + " and " + a + " is " + a + "<br>");
	}else if (a < b){
		document.write("The greater nuber of " + a + " and " + b + " is " +b + "<br>");
	}else {
		document.write(a+"is equal to "+b  + "<br>")
	}
}
greaterNum(14, 23);
greaterNum(22 , 22);
greaterNum(24,49);