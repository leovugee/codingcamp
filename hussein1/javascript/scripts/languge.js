var salam = ["hello", "你好", "алло"];

function great(){
	var value = document.getElementById("demo").value;	
	
	if (value == "English") {
		alert(salam[0]);
	}if (value == "Chinese"){
		alert(salam[1]);
	}if (value== "Russian") {
		alert(salam[2]);
	}
}