$(document).ready(function(){
	$("#newmail").on('keyup',function(){
	var newmail = "";	
	var myDefaulet = $(this).val();
	var atSign = myDefaulet.indexOf("@") > -1;
	var dotSign = myDefaulet.indexOf(".") > -1;

	if (atSign && dotSign ) {

   $('h2').text("vaild email adress");
	}

	
	});
 


});