const palindromes = function (string) {
	//
	cleanString = string.toLowerCase().match(/[a-z]/g).join("");
	reversed = string.toLowerCase().match(/[a-z]/g).reverse().join("");
	return cleanString === reversed;
	//
};

// Do not edit below this line
module.exports = palindromes;
