$(document).ready(function(){
 $('#email').on('change',function(){
 	var email = $(this).val();
 	var valid = $('#validate');
 	if((email.indexOf('@')> -1) && (email.indexOf('.')> -1)){
 		valid.hide();
 	}else{
 		valid.show();
 	}
});
});