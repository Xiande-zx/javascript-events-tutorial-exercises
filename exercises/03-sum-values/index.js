window.calculateSumListener = function calculateSumListener(){
	//Return the value of the input #firstNumber 
	var numberA = parseInt(document.getElementById("firstNumber").value);
	//Return the value of the input #secondNumber
	var numberB = parseInt(document.getElementById("secondNumber").value);

	//your code goes here
	document.getElementById("resultNumber").value = numberA+numberB;
};
