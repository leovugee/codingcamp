$(document).ready(function () {
  // create a div with class "left"
  var left = $("<div></div>").addClass('left')
  // add a heading (h1) with text "demo"
  $("<h1>demo</h1>")
  // add a heading (h1) with text "test"
  $("<h1>test</h1>")
  // create a div with class "right"
  var right = $("<div></div>").addClass('right')

  // create a unordered list
   var list = $("<ul></ul>")
  // add 4 list items with each a number (1 to 4)
  $("<li>1</li>").appendTo(list)
  $("<li>2</li>").appendTo(list)
  $("<li>3</li>").appendTo(list)
  $("<li>4</li>").appendTo(list)
  // add the list
  // to the div which has the class left
  list.appendTo(left)
  // put the 2 divs at the end of the body
  $('body').append(left)
  $('body').append(right)

  // add a paragraph with some text
  // in the div with class right
  $("<p>bla bla bla</p>").appendTo(right)
});