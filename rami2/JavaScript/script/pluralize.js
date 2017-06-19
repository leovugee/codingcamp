function pluralize(noun, number) {
  
	if (number >= 1 && noun != 'sheep' && noun !='jeese' ) {
		alert(noun + "s");
​
	}else {
		alert(noun);
	}
​
}
​
	var noun = prompt("Which animal do you want?");
  	var number = prompt("how many animal");
pluralize(noun, number);