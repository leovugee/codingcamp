var myArray = [ 15, 7, 8, 23 ];
function calc(){
	var sum = 0;
	var pro = 1;
	for (var i = 0; i < myArray.length; i++) {
		sum += myArray[i];
		pro *= myArray[i];
	}
	var sumMessage = "Sum: " + myArray.join(" + ") + " = " + sum;
	var proMessage = "Product: " + myArray.join(" * ") + " = " + pro;
	document.getElementById("demo1").innerHTML = sumMessage;
	document.getElementById("demo2").innerHTML = proMessage;
}