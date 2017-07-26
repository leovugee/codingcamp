$(function(){
  var x=1;
  $("button").on('mouseover', function(){
    if (x == 1) {
      $(this).animate({'left':'1100px'});
      x = 2;
    } else {
      $(this).animate({'left':'100px'});
      x = 1;
    }
  })
  .on('click',function(){
    $('#msg').text('Great Job ... You Did It!!!');
  });
});