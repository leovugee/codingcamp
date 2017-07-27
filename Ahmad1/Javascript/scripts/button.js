/*$(document).ready(function(){
   var open = false
    $("#click").click(function(){
      open = !open
      if(open){
         $(this).animate({
          top: '300px',
          }).animate({
            left: '60px',
          }).animate({
            width: '100px',
            height: '100px',
          },function(){
            $(this).text('Y');
          });
      }else{
        $(this).animate({
            top: '-=300px',
          }).animate({
            left: '-=60px',
          }).animate({
            width: '-=50px',
            height: '-=50px',
          },function(){
            $(this).text('X');
          });
      }
  });
});
