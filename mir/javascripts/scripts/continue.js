var animal = ["dog" , "cat" , "unicorn" , "lion","hourse" , "dankee"];
var guessAnimal = "unicorn";
for(i = 0;i < animal.length ; i++){
	
	if (animal[i] === guessAnimal ) {
		continue ;
	}
	
	console.log("the animal is " + animal[i]);
		
}