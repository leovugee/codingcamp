$(function(){

  var insearch = $("#insearch");
  var button = $("#btn");
  var title = $("#title");
  var text = $("#text");

  button.on('click', function(){

    var url = 'http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page='+ insearch.val() +'&callback=?';

    $.getJSON(url, function(data){

      console.log(data);

      title.text(data.parse.title);
      text.html(data.parse.text["*"]);

    });
  });

});
