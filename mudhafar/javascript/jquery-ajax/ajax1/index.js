$(function(){
  var $body = $('body');

  $.ajax('http://127.0.0.1:8080/data.json', {
    complete: function(jqxhr, textStatus) {
      var json = jqxhr.responseJSON;
      console.info('loaded json', json);
      var fullName = '<p>Hello my name is ' + json.name.first + ' ' + json.name.last + '</p>';
      $body.append(fullName);

    }
  });
});