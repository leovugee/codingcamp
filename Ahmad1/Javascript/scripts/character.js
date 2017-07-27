$(document).ready(function(){
	$('input').on('keyup',function(){
		var character = $(this).val().length;
		$("div").text(character);
	});
});