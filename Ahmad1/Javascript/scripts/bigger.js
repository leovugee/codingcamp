
function greaterNum(a,b) {
	if (b<a){
		console.log("the greater number of " + a + " and " + b + " is " + a);
	} else if(b>a){
		console.log("the greater number of " + a + " and " + b + " is " + b);
	} else {
		console.log("the numbers " + a + " and " + b + " are equal");
	}
}
greaterNum(1l,3);