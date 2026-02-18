const removeFromArray = function (arr, ...args) {
	const toBeDeleted = [...args];

	for (item of toBeDeleted) {
		let itemIndex = arr.indexOf(item);
		if (itemIndex !== -1) {
			arr.splice(itemIndex, 1);
		}
	}
	return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
