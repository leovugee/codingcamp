
function isAnagram(s1, s2){

 if(!s1 || !s2 || s1.length !== s2.length){return false;}

 var lS1 = s1.toLowerCase();
 var lS2 = s2.toLowerCase();

 if(lS1 === lS2) {return false;}

 var rS1 = lS1.split('').sort().join('');
 var rS2 = lS2.split('').sort().join('');

 return rS1 === rS2;
}


var s1 = prompt("Insert the first word:");
var s2 = prompt("Insert the second word:");

var message = isAnagram(s1, s2) ? "Anagram" : "Not an anagram"; 
alert(message);