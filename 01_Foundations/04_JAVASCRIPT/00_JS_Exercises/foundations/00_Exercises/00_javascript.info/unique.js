function unique(arr) {
	const uniqueItems = [];
	arr.map(item => {
		uniqueItems.indexOf(item) < 0 ? uniqueItems.push(item) : "";
	});
	return uniqueItems;
}

let strings = ["Hare", "Krishna", "Hare", "Krishna", "Krishna", "Krishna", "Hare", "Hare", ":-O"];

console.log(unique(strings)); // Hare, Krishna, :-O
