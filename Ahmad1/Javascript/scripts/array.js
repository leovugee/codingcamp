var colors = ["red","black","green","gray","brown"];
var i ;


function arrayFunction() {
	 colors.sort();
	 var text= "";
     for (i = 0 ; i <= colors.length; i++){
		text += "this color number # " + (i + 1) + " is " + colors[i] + "<br>";
	}

	
	document.getElementById("demo").innerHTML =  text;
}

