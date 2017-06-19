var animals = ["dog", "cat", "bird", "unicorn", "snake", "ants", "butterfly"];
var aniNum = "unicorn";

for(i = 0; i < animals.length; i++){
	if (aniNum == animals[i]) {
		continue;
	}
	console.log("The animal is " + animals[i]);
}




