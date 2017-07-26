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
			$('#charscounter').css('color','black');

		} else {

			charsLeftMsg = Math.abs(charsLeft) + " character" + plural + " too much";
			$('#charscounter').css('color','red');

		}

		$('#charscounter').text(charsLeftMsg);

	});
});