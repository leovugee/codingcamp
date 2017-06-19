
function plural()
{
	var number = prompt("how many animal do you want ?");
	var animal = prompt("wich animal do you want ?");
	var plural = "s"
	var str = animal.concat(plural)
	
	if(number>1 && animal!="sheep") {
		alert("you have " + number + " " + str);
	}else {
		alert("you have " + number + " " + animal);
	}
}
plural()