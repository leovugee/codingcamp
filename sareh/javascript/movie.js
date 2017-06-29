var movie = {

	title : "The Avengers",
	duration : 90,
	actors : ["Robert De Niro", "John Wayne", "Scarlett Johansson"],

	information : function () {

		return this.title + " lasts for " + this.period() + " minutes. Actors: " + this.actors.join() + ".";
	},

	period : function() {
		var hours = Math.floor(this.duration / 60);
		var min = this.duration % 60;
		return hours + " hours and " + min;
	}

}

document.getElementById("msg").innerHTML = movie.information();