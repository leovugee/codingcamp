function palyndrome(pal){
	
	var reversed = ""; 
	
	for (i = pal.length - 1; i >= 0; i--){
		reversed += pal.charAt(i);
	}
	
	if (reversed == pal){
		alert("it is a palyndrome");
	} else {
		alert("it is not a palyndrome");
	}
}

palyndrome(prompt("pal").toLowerCase());