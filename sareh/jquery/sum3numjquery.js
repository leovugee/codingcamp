$(document).ready(function(){
	$('button').css("color","red")
	$('input').on('change',function(){
	var num1 = +$("#num1").val();
	var num2 = +$("#num2").val();
	var num3 = +$("#num3").val();
	var sumOfNum = num1 + num2 + num3 ;
	$("#sum").text(sumOfNum);	
	});

   $('#newText').on('keyup',function(){
   	var numberOfCharacters = $(this).val().length;
   	$('#number').text("has " + numberOfCharacters + " letters");
   });



});
	