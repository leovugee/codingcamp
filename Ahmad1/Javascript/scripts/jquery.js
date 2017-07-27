/*$("document").ready(function(){
	$(" p").first().text("I");
	$("div > div").children("p").text("Love");
	$(" p").last().text("Pizza");

});*/

$(document).ready(function(){
$("button").on('click', function(){
	var second = $("<span>seco</span>");
	second.appendTo($("#container > div"));
	//$("#container > div").append(second);
	$("div > div > p").remove();

});
});