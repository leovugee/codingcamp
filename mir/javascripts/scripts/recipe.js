var recipe = {
    title: 'Cake',
    servings: 5,
    ingredients: [['cumin', 500], ['cinnamon', 300], ['cocoa', 200], ['eggs', 2], ['butter', 30]]
};
document.getElementById('title').innerHTML = recipe.title;
document.getElementById('servings').innerHTML = "serving: " + recipe.servings;
document.getElementById('ingredients').innerHTML = "ingredients: " ;

var  answer = "";
for (var i = 0 ; i < recipe.ingredients.length ; i++){
	if(i % 2){
	 answer += "<span class='odd'>"  + recipe.ingredients[i][0] +"</span> <br>";}
else{
	answer += "<span class='even'>"  + recipe.ingredients[i][0] +"</span><br>";
	}
}

document.getElementById('long-list').innerHTML = answer;
