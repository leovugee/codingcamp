var message = prompt("Enter a word to check if it's palindrome");
var mes = "Palindrome";



for(var i = 0; i < message.length; i++){
    
    if(message.charAt(i) != message.charAt(message.length - 1 -i)){
        mes = "Noooo palinndrome";
    }
}

alert(mes);
