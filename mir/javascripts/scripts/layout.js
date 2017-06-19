function calculator(){
 var multiplier =document.getElementById("number").value ;
 var message = "";
 for (var i = 1 ; i <= 10 ; i++){
	var result = i * multiplier;
	 message += multiplier +" * " + i + " = " + result + "<br>";
}
document.getElementById("result").innerHTML = message;
}
