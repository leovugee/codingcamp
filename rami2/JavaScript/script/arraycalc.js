var array = [15, 7, 8, 23, 2, 6, 56, 78, 0];

document.getElementById("test1").innerHTML = "array: " + array.join(" , ");

function myFun(){
	
		var sum =0;
		var product = 1;
	
	
	for (var i = 0; i < array.length ; i++){
			sum += array[i];
			product *= array[i];
	}
	 document.getElementById("test2").innerHTML = "Sum: " + array.join(" + ") + " = " + sum;
    document.getElementById("test3").innerHTML = "Product: "  + array.join(" * ") + " = " + product;
}




