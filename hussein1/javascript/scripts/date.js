/*
function myBirthday() {
var d = new Date();
var y = d.getFullYear()
var m = d.getMonth();
document.getElementById("demo").innerHTML = d.getDate() + "/" + (m+1) + "/" + y ;
}
myBirthday();
*/

function myBirthday() {
var d = new Date();	
d.setFullYear(1986,1,16)

document.getElementById("demo").innerHTML = d;
}
myBirthday();
