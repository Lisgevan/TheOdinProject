function filterRangeInPlace(arr, a, b) {
	for (value of arr) {
		if (a <= value <= b) {
			arr.splice(arr.indexOf(value), 1);
		}
	}
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4

console.log(arr); // [3, 1]
