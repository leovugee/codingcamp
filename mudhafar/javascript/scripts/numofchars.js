$(document).ready(function() {
	
	$('#text').on('keyup', function() {

		var charsNum = +$(this).val().length;
		$('#charsnum').text(charsNum);

	});
});