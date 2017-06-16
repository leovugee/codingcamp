var riddle = prompt("What is easy to get into, but hard to get out of?");
var name = "trouble";
var finishMessage = "You won!";


while(name != riddle.toLowerCase()){
    if(confirm("Nope. Do you give up?")){
        finishMessage = "Sorry the answer was: trouble";
        riddle = name;    
       }else{
           riddle = prompt("What is easy to get into, but hard to get out of?");
       }  
}
    alert(finishMessage);
      