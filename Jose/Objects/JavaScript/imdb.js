var imdb = {
    title: "Die Hard",
    duration: 130,
    actors: ["Bruce Willis", "Jai Courteney", "Alan Rickman"],
    information: function(){
        return this.title + " last for "; 
    },
    convertToHours: function(){
        var min = this.duration % 60;
        return Math.round(this.duration / 60) + " hours and " + min + " min." ;
    } 
    
}

    
    var act = " Actors: " + imdb.actors.join(", ");
    
    
    document.getElementById("text").innerHTML = imdb.information() +  imdb.convertToHours() + act + ".";