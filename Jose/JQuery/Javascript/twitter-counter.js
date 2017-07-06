
var counter1;



$(document).ready(function(){
  $("textarea").on("keyup keydown", function(){
    counter1 = 140 - $(this).val().length;
    $("#counter").text( counter1 + " characters left");
    if (counter1 < 0 ) {
      $("#counter").text(Math.abs(counter1) + " too much characters" ).css("color", "red");

    }else{
    $("#counter").text(Math.abs(counter1) + " too much characters" ).css("color", "");
    }
  });

});
