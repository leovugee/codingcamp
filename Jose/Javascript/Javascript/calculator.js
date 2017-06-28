var result1;
var aar = [];
aar = document.getElementsByTagName("button");

function rest() {
    document.getElementById("num1").value = 0;
    document.getElementById("num2").value = 0;
}
function reset(){
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}

function calculator(val){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    switch(val){
    
        case 'sum':
            
                
                
                 result1 = parseInt(num1) + parseInt(num2); 
                
            
            for(var i = 0; i < aar.length; i++){
                aar[i].style.color = "black";
            }
            document.getElementById("sum").style.color = "red";
            break;
            
        case 'mul':
            
            
            result1 = parseInt(num1) * parseInt(num2); 
            
            for(var i = 0; i < aar.length; i++){
                aar[i].style.color = "black";
            }
            document.getElementById("mul").style.color = "red";
            break;
            
        case 'min':
            
            result1 = parseInt(num1) - parseInt(num2);   
            for(var i = 0; i < aar.length; i++){
                aar[i].style.color = "black";
            }
            document.getElementById("min").style.color = "red";
            break;
            
        case 'div':
             if(num2 != 0){
              result1 = parseInt(num1) / parseInt(num2);
                for(var i = 0; i < aar.length; i++){
                aar[i].style.color = "black";
                }
                document.getElementById("div").style.color = "red";
                
                break;
            }
    
            else{
                alert("Its not possible to divide");
                for(var i = 0; i < aar.length; i++){
                aar[i].style.color = "black";
                }
                document.getElementById("div").style.color = "red";
                break;
            }
               
           
            
    }
}

function result(){
 
    if( document.getElementById("num1").value == "" || document.getElementById("num2").value == ""){
               document.getElementById('text').innerHTML =  "You have to write the two numbers first";
                
     }else if( isNaN(document.getElementById("num1").value)  || isNaN(document.getElementById("num2").value)){
         document.getElementById('text').innerHTML =  "Put a number motherfucker ;) ";
     }else{
    document.getElementById('text').innerHTML = result1;
     }
}



