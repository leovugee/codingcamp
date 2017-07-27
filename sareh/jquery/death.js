$(document).ready(function(){
	var place = true;
$("#box").on("mouseover",function(){
	if (place == true) {
		$(this).animate({ marginTop: 500});
		place=false;
	} else{
		$(this).animate({ marginTop: 0});
		place=true;
	};
})
	  
.on("click",function(){
	alert("you win");

 });

});