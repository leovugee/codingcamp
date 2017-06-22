var text = "";
var movie = {
	title: "Titanic",
	duration: 195,
	actors : ["leonardo dicaprio", "kate winslet", "billy zane", "bill paxton", "kathy bates", "frances fisher"],
	timing : function(){
		var h = Math.floor(this.duration/60);
		var m = this.duration % 60;
		return h + "h " + " & " + m + " min" ;
	},
	information : function(){
		return text = " the movie : " + this.title + "<br>" + "The Avengers lasts for : " + this.timing() + "<br>" + "actors : " + this.actors.join(" / "); 
	}
	
};

document.getElementById("demo").innerHTML = movie.information();