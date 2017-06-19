var array = [17, 13, 14, 15,19];
document.getElementById("my-array").innerHTML = 'my array' + array.join(', ');

function calcArray() {
	var sum = 0;
	var product = 1;

	for (var i = 0 ; i < array.length; i++)
	{
		sum += array[i];
		product *= array[i];
	}
	var message = 'sum: ' + array.join (' + ') + ' = ' + sum + '<br>product: '+ array.join(' * ') + ' = '+ product;
document.getElementById("array-results").innerHTML = message;
}
