function pushZero(num){
    var number = num;
    number.toString();
    
    var array = number.split("");
    var array1 = [];
    var result = [];
    
    var temp = 0;
    var temp1 = 0;
    var answer = 0;
    
    for(var i = 0; i < array.length; i++){
        if(array[i] == 0){
           array1[temp] = array[i];
            temp++;
         }else{
             result[temp1] = array[i];
             temp1++;
         }
    }
    
    
    
    for(var i = 0; i < array1.length; i++){
        result.push(array1[i]);
    }
    
    result = result.join("");
    
     
    
    
    
    
    
    document.getElementById('message').innerHTML = result;
    
}

