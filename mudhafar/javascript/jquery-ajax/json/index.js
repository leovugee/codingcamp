$(function(){

  var topic = $("#topic");
  var description = $("#description");
  var image = $("#image");

  $("a").on("click", function(){

    var weeknumber = $(this).closest('.week').data('weeknumber');
    var daynumber = $(this).text();
    var url = 'week/' + weeknumber + '/' + daynumber + '.json';
    console.info(url);

    $.getJSON(url, function(data) {

      topic.text(data.topic);
      description.text(data.description);
      image.attr('src', data.image);

    });

  });






});