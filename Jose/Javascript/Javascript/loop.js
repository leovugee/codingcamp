function multiplication(number){
    var mult = 0;
    var resultMessage = "";
    for(var i = 0; i < 10; i++){
        mult = i * number;
        resultMessage = resultMessage + mult + "<br>";
    }
    document.getElementById("text").innerHTML = resultMessage;
}



