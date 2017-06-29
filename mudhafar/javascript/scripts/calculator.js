
var oper =1;
var msg ;

function refault(){
	document.getElementById("plus").style.color = "red";
	document.getElementById("numberOne").value = "0";
	document.getElementById("numberTwo").value = "0";
	calculate(1);
}

function calculate(x){
	var y = parseInt(x);
	var firstNumber = parseInt(document.getElementById("numberOne").value);

	var secondNumber = parseInt(document.getElementById("numberTwo").value);

	switch (y) {
		case 1:
		msg = firstNumber + secondNumber;
		oper =1;
		break;
		case 2:
		msg =  firstNumber - secondNumber;
		oper = 2;
		break;
		case 3:
		msg = firstNumber * secondNumber;
		oper =3;
		break;
		case 4:
		msg = firstNumber / secondNumber;
		oper=4;
		break;

	}
}

function color(z){

	var loop = document.getElementsByTagName("button").length
	
	for (var i=0 ; i<loop; i++){
	document.getElementsByTagName("button")[i].style.color = "black";
}
	z.color = 'red';
}

function result(){
	var num1 = document.getElementById("numberOne");
	var num2 = document.getElementById("numberTwo");

	if ((oper==4) && (parseInt(num2.value))==0){ 
		msg = " Can't devide by zero.";
	}else if ((num2.value=="") || (num1.value=="")){
		msg = "One or both operands are missing.";
	}else if (isNaN(num2.value) || isNaN(num1.value)){
		msg = "Please insert just numbers.";
	} else {
	calculate(oper);
}
	document.getElementById("result").innerHTML = msg ;
    
}
