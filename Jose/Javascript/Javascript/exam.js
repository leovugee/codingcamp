var note1 = [];

for(var i = 1; i <= 3; i++){
    note1.push(parseInt(prompt("Enter the notes of the exam" + i )));

}




function checkNotes(note1){
    var media = 0;
    for(var i = 0; i < note1.length; i++){
        media += note1[i];  
    }
    media = media / note1.length;
    
    media = Math.round(media);
    
    return media;
}




function average(media){
    switch(media){
        
        case 1:
        case 2:
        case 3:
            document.getElementById("element").innerHTML = "Good";
            break;
        case 4:
        case 5:
            document.getElementById("element").innerHTML = "Bad";
            break;
        default:
            document.getElementById("element").innerHTML = "Scheiße";
    }
}

average(checkNotes(note1));