const palindromes = function (str) {
	const cleaned = str.replace(/[^\w\s]|\s/g, "");
	const reversed = cleaned.split("").reverse().join("");

	return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
