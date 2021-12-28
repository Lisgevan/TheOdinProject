const ftoc = function (temp) {
	//added
	return +(((temp - 32) * 5) / 9).toFixed(1);
	//
};

const ctof = function (temp) {
	//added
	return +((temp * 9) / 5 + 32).toFixed(1);
	//
};

// Do not edit below this line
module.exports = {
	ftoc,
	ctof,
};

// [°F] = [°C] × 9⁄5 + 32
// [°C ] = ( [°F ] − 32) × 5⁄9
