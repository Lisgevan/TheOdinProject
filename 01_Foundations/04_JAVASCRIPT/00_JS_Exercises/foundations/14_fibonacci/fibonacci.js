const fibonacci = function (num) {
	let result = 0;
	if (num === 0) return 0;
	if (num === 1) return 1;
	for (let i = 2; i <= num; i++) {
		result = fibonacci(i - 1) + fibonacci(i - 2);
	}

	return result;
};

// Do not edit below this line
module.exports = fibonacci;
