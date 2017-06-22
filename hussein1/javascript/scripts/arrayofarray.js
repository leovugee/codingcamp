var a = [0];
var b = [1, 2];
var c = [3, 4, 5];
var d = [6, 7, 8, 9];

var arr = [a, b, c, d];



for (var i = 0; i < arr.length; i++) {
	for(var j = 0;j < arr[i].length; j++){
		console.log(arr[i][j]);
	}
}

for (var i = arr.length-1; i >= 0 ; i--) {
	for(var j = arr[i].length-1;j >= 0; j--){
		console.log(arr[i][j]);
	}
}
