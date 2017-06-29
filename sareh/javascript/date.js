var d = new Date("1981-12-27");
var date = document.getElementById("date");
date.innerHTML = (d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear());
console.log(Date());