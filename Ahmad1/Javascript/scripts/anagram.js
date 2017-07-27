var a = [0];
var b = [1, 2];
var c = [3, 4, 5];
var d = [6, 7, 8, 9];
//var arr = [a, b, c, d];

var arr = [[0], [1, 2], [3, 4, 5], [ 6, 7, 8, 9]];



for (var i = arr.length -1  ; i >= 0  ; i--) {
	for (var j = arr[i].length -1  ; j >= 0 ; j--) {
		console.log(arr[i][j]);
	}

}
