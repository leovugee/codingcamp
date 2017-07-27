$(document).ready(function() {
	$("#one").click(function() {
		$(this).css("background-color","blue");
});
	$("#two").click(function() {
		$(this).css("background-color","red");
});
	$("#three").click(function() {
		$(this).css("background-color","green");
});
		var button = $("<button id=reset>reset</button>");
			$("body").append(button);
			$("#reset").click(function(){
			$("button").css("background-color","");	
			
	});
});