function greaterNum(num, name){
   if(num > 1 && name != "" & name != "sheep"){
        document.getElementById("text").innerHTML = num + " " + name + 's';
      }
    if(num < 1 || name === "sheep"){
        document.getElementById("text").innerHTML = num + " " + name;
    }
    
}

greaterNum(2, "dog");