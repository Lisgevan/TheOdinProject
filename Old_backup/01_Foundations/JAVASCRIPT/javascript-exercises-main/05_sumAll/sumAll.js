const sumAll = function (num1, num2) {
	//added
	let sum = 0;
	const arr = [num1, num2].sort((a, b) => a - b);
	if (num1 < 0 || num2 < 0 || /\d/.test(num2)) {
		return "ERROR";
	} else {
		for (i = arr[0]; i <= arr[1]; i++) {
			sum += i;
		}
		return sum;
	}
	//
};

// Do not edit below this line
module.exports = sumAll;
