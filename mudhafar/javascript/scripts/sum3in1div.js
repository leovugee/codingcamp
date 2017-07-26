$(document).ready(function() {
	
	$('#calc').on('click', function() {

		var num1 = +$('#num1').val();
		var num2 = +$('#num2').val();
		var num3 = +$('#num3').val();
		var sum = num1 + num2 + num3;
		$('#sum').text(sum);

	});
});