var birthdate= 1982;
var now= 2017;
var later= 2028;

var myAge= now - birthdate;
var aftertenyears= later - birthdate;

console.log("My age is " +myAge+ " and at " +later+ " i\nam " +aftertenyears+ " years old");

document.write("My age is " +myAge+ " and at " +later+ " i\nam " +aftertenyears+ " years<br>");

window.alert("My age is " +myAge+ " and at " +later+ " i\nam " +aftertenyears+ " years old");

var maxYear= 2060;
var sncksperday= 2;
var ayeardays= 365;
var maxAge= maxYear-birthdate;
var totaldays= maxAge*ayeardays;
var totalsnacks= totaldays*sncksperday;


document.write("You will need " +totalsnacks+ " to last you until the rips old age of " + maxAge + "<br>");

var radius = 5;
var circumference =Math.round(2 * radius * Math.PI);
var area = Math.round(Math.pow(radius, 2) * Math.PI);

document.write("Circumference is " + circumference + " and Area is " + area + "\n");
 

 var tempcelsius = 21;
var tempfarenheit = 69.8;

var CtoF= tempcelsius*9/5+32;
var FtoC= (tempfarenheit-32)*5/9;

document.write(tempcelsius + " °C is " + CtoF + " °C<br>");
document.write(tempfarenheit + " °F is " + FtoC +" °F");



