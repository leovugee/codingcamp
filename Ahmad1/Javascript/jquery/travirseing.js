$(document).ready(function(){
  $("body > div ")
  .first().find('div > div')
  .first().text('111');
  $("body > div ").first().next().find('ul > li').eq(2).text('override');
});