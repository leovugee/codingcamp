$(function(){

  var byName = $('#by-name');
  var byGenre = $('#by-genre');

  $.getJSON('data.json', function(data){

    var newObject = {};

    data.forEach(function(item){

      if (!newObject[item.genre]) {
        newObject[item.genre] = [];
      }

      newObject[item.genre].push(item.name);
    });



    console.log(newObject);

    // var listByName ="<h2>list by name</h2>";

    // data.forEach(function(object){
    //   console.log(object);
    //   listByName += '<li><b>' + object.name +'</b><br>' + object.genre + '</li>';
    // });

    // byName.html(listByName);


    var listByGenre ="<h2>list by genre</h2>";

    var nameList = "";

    Object.keys(newObject).forEach(function(item){

      nameList = "";

      // console.log(item);

      item.forEach(function(band){

      nameList += '<li>' + band.name + '</li>';

      });

      listByGenre += '<ul><b>' + item.genre +'</b>' + nameList + '</ul>';

    });

    byGenre.html(listByGenre);

  });








});