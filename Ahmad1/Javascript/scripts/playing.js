/*$(document).ready(function(){
	$('textarea').on('keyup',function(){
		var character = 140 - $(this).val().length;
		$(".counter").text(character );
		if (character<0) {
			$('.counter').text(Math.abs(character) + " too much character");
		}
	});
});*/
$(document).ready(function() {

	var limit = 140;
	
	$('#text').on('keyup', function() {

		var plural = "";
		var charsLeftMsg = "";
		var charsNum = +$(this).val().length;
		var charsLeft = limit - charsNum;

		if (Math.abs(charsLeft) == 1) {
			plural = "";
		} else {
			plural = "s";
		}
		
		if (charsLeft >= 0) {

			charsLeftMsg = charsLeft + " character" + plural + " left";
			$('#counter').css('color','black');

		} else {

			charsLeftMsg = Math.abs(charsLeft) + " character" + plural + " too much";
			$('#counter').css('color','red');
		}

		$('#counter').text(charsLeftMsg);

	});
});