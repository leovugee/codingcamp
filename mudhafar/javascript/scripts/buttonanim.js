$(document).ready(function() {
	$('#btn').on('click', function() {
		var btntxt = $(this).text();
		if (btntxt == 'X') {
			$(this).animate({
				'top':'350px'
			},2000)
			.animate({
				'left':'110px'
			},1000)
			.animate({
				'width':'100px',
				'height':'100px'
			}, 500,function(){
				$(this).text('Y');
			});
		} else {
			$(this).animate({
				'left':'170px'
			},2000)
			.animate({
				'top':'50px'
			},1000)
			.animate({
				'left':'50px'
			},2000)
			.animate({
				'width':'50px',
				'height':'50px'
			}, 500,function(){
				$(this).text('X');
			});
		}
	});
});