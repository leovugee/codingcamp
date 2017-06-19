var x = prompt("Enter the first number:");
var y = prompt("Enter the second number:");
if ( x == y ) {
	var message = "The two numbers are equal.";
} else {
	var message = "The greater number of " + x + " and " + y + " is " + greaterNum(x,y);
}
var first = document.getElementById("firstNum");
var second = document.getElementById("secondNum");
var result = document.getElementById("result");
first.innerHTML = "The first number is: " + x;
second.innerHTML = "The second number is: " + y;
result.innerHTML = message;

function greaterNum(a,b) {
	if ( a > b ) {
		return a;
	} else {
		return b;
	}
}