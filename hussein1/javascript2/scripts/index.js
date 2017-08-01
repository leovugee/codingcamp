function myFreinds() {

var student = ['hussein', 'yasser', 'rami', 'mudafar','mir', 'jouhanes'];
var listOfStudent = [];
var input = document.getElementById('main-in');
var filter = input.value.toUpperCase();
for (var i = 0; i<student[i].length; i++) {
  listOfStudent[i] = '<li>' + student[i] + '</li>';
}
}
myFreinds();