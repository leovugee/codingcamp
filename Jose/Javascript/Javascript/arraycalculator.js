var myArray = [15, 3, 78, 2, 67];


 document.getElementById("element1").innerHTML = "My array: " + myArray.join(" , ");

function calculate(){
    
    var sum = 0;
    var product = 1;
    
    for(var i = 0; i < myArray.length; i++){
      
        
        sum += myArray[i];
        product *= myArray[i];
        
    }
    document.getElementById("element2").innerHTML = "Sum: " + myArray.join(" + ") + " = " + sum;
    document.getElementById("element3").innerHTML = "Product: "  + myArray.join(" * ") + " = " + product;
}