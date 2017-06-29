function greaterThan(num1, num2){
    if( num1 > num2){
         var d1 = document.getElementById("element"); 
        d1.insertAdjacentHTML( 'afterend', "The greater number of " + num1 + " and " + num2 + " is " + num1);
        
        
        
       }
    else{
        var d1 = document.getElementById("element");
        d1.insertAdjacentHTML( 'beforeend', "The greater number of " + num1 + " and " + num2 + " is " + num1);
    }
    
}

   
greaterThan(5, 8);
greaterThan(9, 8);