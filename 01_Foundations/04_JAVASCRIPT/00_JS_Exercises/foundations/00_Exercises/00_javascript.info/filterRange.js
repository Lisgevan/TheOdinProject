function filterRange(arr, a, b) {
	let resultArray = [];

	for (value of arr) {
		if (value >= a && value <= b) {
			resultArray.push(value);
		}
	}

	return resultArray;
}

console.log(filterRange([5, 3, 8, 1], 1, 4));

function filterRange2(arr, a, b) {
	let resultArray = arr.reduce((acc, value) => {
		value >= a && value <= b ? acc.push(value) : "";
		return acc;
	}, []);

	return resultArray;
}

console.log(filterRange2([5, 3, 8, 1], 1, 4));

function filterRange3(arr, a, b) {
	let resultArray = [];
	arr.map(value => {
		value >= a && value <= b ? resultArray.push(value) : "";
	});

	return resultArray;
}

console.log(filterRange3([5, 3, 8, 1], 1, 4));
