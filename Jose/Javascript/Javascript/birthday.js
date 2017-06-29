function getMyBirthday(){
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    document.getElementById("Date").innerHTML = day + "/" + month + "/" + year;
    var d = new Date(92, 11, 4);
    var year = d.getFullYear();
    var month = d.getMonth() + 1;
    var day = d.getDate();
    document.getElementById("Date1").innerHTML = day + "/" + month + "/" + year;
}

getMyBirthday();