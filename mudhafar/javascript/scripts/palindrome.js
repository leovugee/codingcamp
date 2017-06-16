function palindrome(word) {
	var x = word.length;
	for (var i=0; i<Math.floor(x/2); i++) {
		if ( word.charAt(i) !== word.charAt(x-1-i) ) {
			message = " is not a palindrome.";
			return message;
		}
	}
	message = " is a palindrome.";
	return message;
}
var inputWord = prompt("Enter a word:");
alert( inputWord + palindrome(inputWord) );


// function palzndrome(word){
// 	return word.split("").reverse().join("");	
// }
// palzndrome(prompt("Insert").toLowerCase());