const findTheOldest = function (people) {
	const today = new Date();
	const year = today.getFullYear();
	people.sort((a, b) => {
		let ageOfA = (a.yearOfDeath ? a.yearOfDeath : year) - a.yearOfBirth;
		let ageOfB = (b.yearOfDeath ? b.yearOfDeath : year) - b.yearOfBirth;
		return ageOfB - ageOfA;
	});

	return people[0];
};

// Do not edit below this line
module.exports = findTheOldest;
