const caesar = function (string, factor) {
	//
	while (factor > 26) {
		factor -= 26;
	}
	const letterList = string.split("");
	const codedletterList = letterList.map(char => {
		if (/[a-zA-Z]/.test(char)) {
			if (/[A-Z]/.test(char)) {
				if (char.charCodeAt() + factor > 90) {
					return String.fromCharCode(char.charCodeAt() + factor - 26);
				} else if (char.charCodeAt() + factor < 65) {
					return String.fromCharCode(char.charCodeAt() + factor + 26);
				} else {
					return String.fromCharCode(char.charCodeAt() + factor);
				}
			} else if (/[a-z]/.test(char)) {
				if (char.charCodeAt() + factor > 122) {
					return String.fromCharCode(char.charCodeAt() + factor - 26);
				} else if (char.charCodeAt() + factor < 97) {
					return String.fromCharCode(char.charCodeAt() + factor + 26);
				} else {
					return String.fromCharCode(char.charCodeAt() + factor);
				}
			}
		} else {
			return char;
		}
	});
	codedString = codedletterList.join("");
	return codedString;
	//
};

// Do not edit below this line
module.exports = caesar;

// String.fromCharCode(65);
// ("A");
// "a".charCodeAt();
// 65
