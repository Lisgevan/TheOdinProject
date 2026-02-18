const getTheTitles = function (arr) {
	const titles = [];
	for (item of arr) {
		titles.push(item.title);
	}
	return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
