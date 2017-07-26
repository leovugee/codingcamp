$(document).ready(function () {

  var $sec1boxes = $('.div');
  var counter1 = 0;
  $('#btn1').on('click', function() {
    $sec1boxes.eq(counter1).addClass('red');
    $sec1boxes.eq(counter1 - 1).removeClass('red');
    counter1 += 1;
    if (counter1 === $sec1boxes.length) counter1 = 0;
  });

  var $sec2boxes = $('.box');
  var counter2 = 0;
  var interval;
  var btntxt=$('#btn2');
  $('#btn2').on('click', function() {
    if (btntxt.text() === 'start') {
      btntxt.text('stop');
      interval = setInterval(function() {
        $sec2boxes.eq(counter2).addClass('red');
        $sec2boxes.eq(counter2 - 1).removeClass('red');
        counter2 += 1;
        if (counter2 === $sec2boxes.length) counter2 = 0;
      }, 200);
    } else {
      clearInterval(interval);
      btntxt.text('start');
    }
  });

});