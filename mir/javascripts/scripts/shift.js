function shift(){
	var zeros = [];
	var others = [];
 	var inText = document.getElementById("number").value ;
 	var arr = inText.split("");
    for (var i = 0 ; i <= arr.length ; i++) {
    	if ( arr[i] == 0 ) {
    		zeros.push(0);
    	}else
    		others.push(arr[i]);
    }
   
    console.log(others.join("") + zeros.join(""))
}