var animal = ["bull","cat","bear","unicorn","dog","sheep","loop"];
var gessAnimal = "unicorn"

function myAnimal(){ 

	for(var i = 0; i < animal.length; i++ ) {
		if (animal[i] === gessAnimal){
			continue;
		}
		alert(" i find the " + animal[i] + " the animal was " + (i+1));
			
		
	}
//document.getEelmentById
}
myAnimal();

