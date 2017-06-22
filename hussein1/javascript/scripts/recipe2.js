var text = "";
var recipe = {
    
    title: 'Cake',
    servings: 5,
    ingredients: [['cumin', 500], ['cinnamon', 300], ['cocoa', 200], ['eggs', 2], ['butter', 30]],
    printLine : function(num){
        
        return  text += (num % 2) ? "<span class='odd'>" + this.ingredients[num][0] + ": " + "</span>" + this.ingredients[num][1] + "<br>" : "<span class='even'>" + this.ingredients[num][0] + ": " + "</span>" + this.ingredients[num][1] + "<br>";
        
        
    }
    
}
    document.getElementById("title").innerHTML = recipe.title;
    document.getElementById("servings").innerHTML = "Servings: " + recipe.servings;
    document.getElementById("ingredients").innerHTML = "Ingredients: ";
    

    for(var i = 0; i < recipe.ingredients.length; i++){
        
        text += recipe.printLine(i);
    }

     document.getElementById("ingredients1").innerHTML = text;