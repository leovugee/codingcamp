
function palyndrome(pal){

	var	reversed = pal.split('').reverse().join('');
	
	if (reversed == pal){
		alert("it is a palyndrome");
	} else {
		alert("it is not a palyndrome");
	}
}

palyndrome(prompt("pal").toLowerCase());