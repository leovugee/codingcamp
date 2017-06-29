$ (document).ready( function () {
	$('button').click(function() {
	var span = "<span>Spanned Text</span>";
	$ ("#container div p").remove();
	$ (span).appendTo("#container div");
});
});