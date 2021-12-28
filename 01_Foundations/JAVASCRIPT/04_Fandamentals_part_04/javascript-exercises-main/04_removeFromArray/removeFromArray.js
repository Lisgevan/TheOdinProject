const removeFromArray = function (arr, ...args) {
	//added

	for (let i = 0; i < args.length; i++) {
		if (arr.indexOf(args[i]) !== -1) {
			arr.splice(arr.indexOf(args[i]), 1);
		}
	}

	return arr;
	//
};

// Do not edit below this line
module.exports = removeFromArray;
