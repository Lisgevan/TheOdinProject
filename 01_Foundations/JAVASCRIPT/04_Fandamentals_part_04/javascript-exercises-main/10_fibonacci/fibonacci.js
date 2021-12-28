const fibonacci = function (num) {
	//
	const fibonacci = [1, 1];
	if (+num <= 0) {
		return "OOPS";
	} else {
		if (+num === 1) {
			return fibonacci[+num - 1];
		} else {
			for (let i = 2; i <= +num; i++) {
				fibonacci.push(fibonacci[i - 2] + fibonacci[i - 1]);
			}
		}
	}
	return fibonacci[+num - 1];
	//
};

// Do not edit below this line
module.exports = fibonacci;
