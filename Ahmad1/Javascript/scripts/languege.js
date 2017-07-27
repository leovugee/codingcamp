var greeting=["Hello","Hallo","مرحبا"]

function languege() {

	var value = document.getElementById("mySelect").value;

	if (value== "en") {
		alert(greeting[0]);
	}if (value== "ge") {
		alert(greeting[1]);
	}if(value== "ar"){
		alert(greeting[2]);
	}	
	
}