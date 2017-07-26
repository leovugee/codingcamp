$(document).ready(function() {
	$('#btn').on('click', function() {
		var btntxt = $(this).text();
		if (btntxt == 'X') {
      $(this).removeClass('gox');
			$(this).addClass('goy');
      
		} else {
			$(this).removeClass('goy');
      $(this).addClass('gox');
      
		}
	});
  $('#btn').on('animationend', function() {
    var btntxt = $(this).text();
    if (btntxt == 'X') {
      $(this).text('Y');
    } else {
      $(this).text('X');
    }
  });
});