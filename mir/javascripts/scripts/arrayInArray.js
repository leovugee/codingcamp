function arrayInArray (){
var articles = ["the", "a"];
var verbs = ["is", "eats"]
var adjectives = ["best", "worst", "shit"];
var names = ["Gabriele", "Gabriel", "Leonardo"]
var arr = [articles, verbs, adjectives, names];

document.write(arr[3][0] + arr[1][0] + arr[0][0] + arr[2][0]);
}

var a = [0];
var b = [1, 2];
var c = [3, 4, 5];
var d = [6, 7, 8, 9];

var arr = [a, b, c, d];
for (var i = arr.length -1 ; i >= 0 ; i--){
	for(var j = arr[i].length - 1 ; j >= 0; j--){
	console.log(arr[i][j]);
	}
}