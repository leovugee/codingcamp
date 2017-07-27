$(document).ready(function () {
	$('button').on('click',function(){
		var number1 = +$('#num1').val();
		var number2 = +$('#num2').val();
		var number3 = +$('#num3').val();
		var total = number1 + number2 + number3;
		$('#sum').text(total)
	});
});