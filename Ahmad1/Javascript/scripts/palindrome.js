function isPalindrome(word) {

    var aWord = word.toLowerCase().split('').reverse().join('');
    
    

  if(aWord == word){
    return aWord === word  
  }
   
}
var word = prompt("Insert the  word");	
var message = isPalindrome(word) ? "palindrom" : "not a palindrom ";
alert(message);