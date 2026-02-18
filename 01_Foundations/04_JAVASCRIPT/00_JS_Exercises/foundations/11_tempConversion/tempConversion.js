const convertToCelsius = function (temp) {
	// x °F ≘ (x − 32) × ⁠5/9⁠ °C
	return +(((temp - 32) * 5) / 9).toFixed(1);
};

const convertToFahrenheit = function () {
	// x °C ≘ (x × ⁠9/5⁠ + 32) °F
	return +((temp * 9) / 5 + 35).toFixed(1);
};

// Do not edit below this line
module.exports = {
	convertToCelsius,
	convertToFahrenheit,
};
