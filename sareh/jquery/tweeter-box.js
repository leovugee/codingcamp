$(document).ready(function(){
	$("#text").on('keyup',function(){
	var limit = 140 ;
	var plural = "";	
	var numOfchar = +$(this).val().length;
	var numChartLeft = limit - numOfchar ;
//// this code down to put s when the world is plural 
   if( Math.abs(numChartLeft) == 1){
    plural = "";
    }else{
  	plural = "s";
    }
	 if ( numChartLeft < 0) {
	$(".counter").text(Math.abs(numChartLeft) +  ' much character'+plural);
	}else{
		$('.counter').text( numChartLeft +' character'+ plural + ' left');
	};
	});
	
});