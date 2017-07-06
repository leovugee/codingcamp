var info;
var confirmation;


$(document).ready(function(){

var nameLabel = $("#nameLabel");
var secondNameLabel = $("#secondNameLabel");
var firstName = $("#firstName");
var secondName = $("#secondName");
var confirmation = $("#confirmation");
var confirmationMessage = $("#messageConfirmation");
var email = $("#email");
var message = $("#message");
var labelConfirmation = $("#confirmationLabel");
var registerButton = $("#registerButton");
var acepptTOU = $("#tou");
var conditions = $("#conditions");

  email.on(" keyup change", function(){
    info = $(this).val();

    if(info.indexOf("@") < 0 || info.indexOf(".") < 0 || info.indexOf("com") < 0){

      message.slideDown("slow");

    }else{
      message.slideUp("slow");
      email.css("background-color", "#b5e7a0" );
      labelConfirmation.slideDown("slow");
      confirmation.slideDown("slow");
    }
  });

  confirmation.on("keyup", function(){
    confirmationVal = confirmation.val();

    if(info !== confirmationVal){
      confirmationMessage.slideDown("slow");

    }else{
      confirmationMessage.slideUp("slow");
      confirmation.css("background-color", "#b5e7a0");
      nameLabel.slideDown("slow");
      firstName.slideDown("slow");
      secondNameLabel.slideDown("slow");
      secondName.slideDown("slow");
    }
  });

  firstName.on(" keyup change", function(){
    firstName.css("background-color", "#b5e7a0");
  });

  secondName.on(" keyup change", function(){
    secondName.css("background-color", "#b5e7a0");
  });

  secondName.on("change keyup", function(){
    acepptTOU.slideDown("slow");
    conditions.slideDown("slow");
  });

  acepptTOU.on("click", function(){
    registerButton.prop("disabled", false);
  });




});
