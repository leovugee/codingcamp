var animal = ["bull","cat","bear","unicorn","dog","sheep","loop"];
var gessAnimal = "unicorn"

function myAnimal(){ 

	for(var i = 0; i < animal.length; i++ ) {
		if (animal[i] === gessAnimal) { 
			alert(" i find the " + gessAnimal + " the animal was " + i);
			break;
		}	
	}
}
myAnimal();

