var array = [15, 7, 8, 23, 2, 6, 56, 78];
document.getElementById("demo1").innerHTML = "array: " + array.join(" , ");

	function calculate(){
		var sum =0;
		var product = 1;
		var text = "";
	for (var i = 0; i < array.length ; i++){
		sum += array[i];
		product *= array[i];
	}
	document.getElementById("demo2").innerHTML = "Sum: " + array.join(" + ") + " = " + sum;
	document.getElementById("demo3").innerHTML = "Product: "  + array.join(" * ") + " = " + product;
}