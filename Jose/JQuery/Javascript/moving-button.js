var button = $("#button");


$(document).ready(function(){
  button.on("click", function(){
    if(button.text() === "X"){
      button.animate({top: '300px'});
      button.animate({left: '90px'});
      button.animate({width: '100px', height: '100px'});
      button.text("Y");
    }else{
      button.animate({left: '150px'});
      button.animate({top: '0'});
      button.animate({left: '0'});
      button.animate({width: '50px', height: '50px'});
      button.text("X");
    }
  });
});
