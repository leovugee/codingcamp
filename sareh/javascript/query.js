$( document ).ready(function() {
  // $("p").first().text("loooppp");
  //$("p").first().next().text("love");
  //$("#container div").children().text("pizariaaa");
  //$("#container :last").text("pizza");
  var change = $('<span>i am new span</span>');
  $('#container').append(change);
  $("#container div").children().remove();
});
//$(change).appendTo('#container');
