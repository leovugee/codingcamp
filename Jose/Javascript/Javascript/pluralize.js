function greaterNum(){
    var animal =  prompt("Which animal do you you want?");
    var num = prompt("How many animals do you want");
    var sheep = ["s", "h","e", "e","p"];
    var temp = true;
    
    if(animal == null || animal == ""){
        window.alert("You didnt wrote a animal", "");
        
    }
    if(num == null || num == 0){
        window.alert("You didnt wrote a num", "");
        
    }
    
    animal = animal.split("");
    
    if(num > 1){
        
        for(var i = 0; i < animal.length; i++){
            
            
            if(animal[i] != sheep[i]){
                temp = false;
                
            }
        }
               
            if(temp == true){
                animal = animal.join("");
                document.getElementById('text').innerHTML = "You have " + num + " " + animal;    
            }
        else{
            animal.push("s");
            animal = animal.join("");
            document.getElementById('text').innerHTML = "You have " + num + " " + animal;    
        }
    }
    
}

greaterNum();