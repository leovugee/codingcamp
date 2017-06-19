var myArray =  [15,7,8,23];
document.getElementById("demo").innerHTML = "my array: " + myArray.join(", ");

function calcArray() {
	var sum = 0;
	var product = 1;
	
	for (var i = 0; i <myArray.length; i++) 
	{
		sum += myArray[i];
		product += myArray[i];
	}	
	var message = "sum: " + myArray.join(" + ") + " = " + sum + "<br>Product: " + myArray.join(" * ") + " = " + product;
	document.getElementById("demo2").innerHTML = message;

}	


	
