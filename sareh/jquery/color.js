$(document).ready(function(){
	$("p").text("hello");
	var newButton = $("<button>reset</button>");
	newButton.appendTo("body");
	newButton.click(function(){
		$("button").css("background-color", "");
	});

	$("button").click(function(){
	var color = $(this).text();
	$(this).css("background-color", color);


	});
	

});
