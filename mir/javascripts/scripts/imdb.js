var movie = {
	title : "matrix",
	duration : 150,
	actors :["Keanu Reeves", "Laurence Fishburne" , "Trinity" ],
	information : function(){
		return "movie : " + this.title + " the movie duration is :" + this.duration + " actors are :" + this.actors.join(" / ");
	}
}
console.log(movie.information())