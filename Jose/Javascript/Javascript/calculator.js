var result1;
var aar = [];
aar = document.getElementsByTagName("button");
var value1 = document.getElementById("num1").value;
var value2 = document.getElementById("num2").value;

function rest() {
    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;
    calculator("sum");
}
function changeColor(){
    for(var i = 0; i < aar.length; i++){
                aar[i].style.color = "black";
            }
            document.getElementById("sum").style.color = "red";
}

function calculator(val){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    switch(val){
    
        case 'sum':
            result1 = num1 + num2; 
            changeColor();
            break;
            
        case 'mul':
            result1 = num1 * num2; 
            changeColor();
            break;
            
        case 'min':
            
            result1 = num1 - num2;   
            changeColor();
            break;
            
        case 'div':
             if(num2 != 0){
              result1 = num1 / num2;
                changeColor();
                break;
            }
    
            else{
                alert("Its not possible to divide");
               changeColor();
                break;
            }
               
           
            
    }
}

function result(){
 
    if( value1 == "" || value2 == ""){
               document.getElementById('text').innerHTML =  "You have to write the two numbers first";
                
     }else if( isNaN(value1)  || isNaN(value2)){
         document.getElementById('text').innerHTML =  "Put a number motherfucker ;) ";
     }else{
    document.getElementById('text').innerHTML = result1;
     }
}



