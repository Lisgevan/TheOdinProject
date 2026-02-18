const add = function (num1, num2) {
	return num1 + num2;
};

const subtract = function (num1, num2) {
	return num1 - num2;
};

const sum = function (arr) {
	return arr.reduce((sum, num) => sum + num, 0);
};

const multiply = function (arr) {
	return arr.reduce((sum, num) => sum * num, 1);
};

const power = function (base, exp) {
	// return base ** exp;
	return base ^ exp;
};

const factorial = function (num) {
	if (num < 0) return alert("Given number needs to be greater or equal than zero!");
	if (num === 0) return 1;
	return factorial(num - 1) * num;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
