const repeatString = function (string, num) {
	//added
	let result = "";
	if (num > 0) {
		for (let i = 0; i < num; i++) {
			result += string;
		}
		return result;
	} else if (num === 0) return result;

	return "ERROR";
	//
};

// Do not edit below this line
module.exports = repeatString;
