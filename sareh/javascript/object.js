var recipe = {
    title: 'Cake',
    servings: 5,
    ingredients: [['cumin', 500], ['cinnamon', 300], ['cocoa', 200], ['eggs', 2], ['butter', 30]],
    printLine: function (num) {
    	
    	return "<span class='" + ((num%2) ? "odd" : "even") + "'>" + this.ingredients[num][0] + "</span>" + " : " + this.ingredients[num][1] + "<br>";
    }
};
var title = "<h1>" + recipe.title + "</h1>";
var servings = "<h2>Servings: " + recipe.servings + "</h2>";
var ingredients = "<h3>Ingredients:<h3>";
for (var i = 0; i < recipe.ingredients.length; i++) {
    ingredients += recipe.printLine(i);
}

document.getElementById("ing-list").innerHTML = title + servings + ingredients;











