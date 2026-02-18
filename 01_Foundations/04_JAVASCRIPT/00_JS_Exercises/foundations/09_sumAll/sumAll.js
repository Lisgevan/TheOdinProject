const sumAll = function (start, end) {
	if (start < 0 || end < 0) return;
	if (start > end) {
		let temp = end;
		end = start;
		start = temp;
	}

	let sum = 0;
	for (i = start; i <= end; i++) {
		sum += i;
	}
	return sum;
};

// Do not edit below this line
module.exports = sumAll;
