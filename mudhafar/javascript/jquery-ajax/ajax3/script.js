$(function(){

  var byName = $('#by-name');
  var byGenre = $('#by-genre');

  $.getJSON('data.json', function(data){

    // console.log(data);

    var listByName ="<h2>list by name</h2>";

    data.forEach(function(object){
      console.log(object);
      listByName += '<li><b>' + object.name +'</b><br>' + object.genre + '</li>';
    });

    byName.html(listByName);
    // byGenre.html(listByGenre);




  });








});