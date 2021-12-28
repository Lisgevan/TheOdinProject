const findTheOldest = function (arr) {
	//
	let thisYear = new Date().getFullYear();

	const result = arr.reduce(
		(acc, item) => {
			let accAge;
			let itemAge;

			acc.hasOwnProperty("yearOfDeath")
				? (accAge = acc.yearOfDeath - acc.yearOfBirth)
				: (accAge = thisYear - acc.yearOfBirth);

			item.hasOwnProperty("yearOfDeath")
				? (itemAge = item.yearOfDeath - item.yearOfBirth)
				: (itemAge = thisYear - item.yearOfBirth);

			if (accAge < itemAge) {
				acc = item;
				return acc;
			} else {
				return acc;
			}
		},
		{ yearOfBirth: 0, yearOfDeath: 0 }
	);
	return result;
	//
};

// Do not edit below this line
module.exports = findTheOldest;
