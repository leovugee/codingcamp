var recipe = {
    title: 'Cake',
    servings: 5,
    ingredients: [['cumin', 500], ['cinnamon', 300], ['cocoa', 200], ['eggs', 2], ['butter', 30]]
};

document.getElementById("title").innerHTML = recipe.title;
document.getElementById("serv").innerHTML = "Servings: " + recipe.servings;

var text = "<h3>ingredients:</h3> ";

for (var i = 0; i< recipe.ingredients.length; i++ ){
		if(i%2 == 0){
		text +=	 "<span class='even'>" + recipe.ingredients[i][0] +":" + "</span>" + "<span class='num'>" + recipe.ingredients[i][1] + "</span><br>"
		}else{
		text +=	 "<span class='odd'>" + recipe.ingredients[i][0] + ":" + "</span>" + "<span class='bum'>" + recipe.ingredients[i][1] + "</span><br>"
		}
	}	

document.getElementById("test").innerHTML = text;