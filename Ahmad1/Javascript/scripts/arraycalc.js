var nums= [15,7,8,23];

function calc() {
	var sum = 0;
	var producte = 1;
	for ( i = 0; i < nums.length ;  i++) {
	sum += nums[i];
	producte *=nums[i];	
	}

document.getElementById("demo").innerHTML= nums.join(" + ") + " = "+ sum +"<br>" + nums.join(" * ") + " = " + producte ;
		
}
