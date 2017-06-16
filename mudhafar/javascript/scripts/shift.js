var originalNum = prompt("Enter a number of more than 5 digits!");
var originalArray = originalNum.split("");
var newArray = [];
var new0Array = [];
for ( i = 0; i < originalArray.length; i++ ) {
if (originalArray[i] == 0) {
	new0Array.push(originalArray[i]);
} else {
	newArray.push(originalArray[i]);
}
}
console.log((newArray.join("")).concat(new0Array.join("")));