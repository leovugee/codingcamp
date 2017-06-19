var celsius = 35;
var fahrenheit = 72;
var cel = Math.round((fahrenheit - 32) * (5/9)) ;
var fah= (celsius * 9)/5 + 32;
/*
console.log(celsius + " C is " + fah+ " F");
console.log(fahrenheit + " F is " + cel+ " C");*/
document.getElementsByClassName("test")[1].innerHTML = " Converting from " + celsius + " C to " + fah + " F";
document.getElementsByClassName("test")[2].innerHTML = " Converting from " + fahrenheit + " F to " + cel + " C";
