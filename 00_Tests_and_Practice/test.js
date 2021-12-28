const caesar = function (string, factor) {
	//
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

console.log(caesar("Hello, World!", 75));
console.log(caesar("Hello, World!", 5));
console.log(caesar("Mjqqt, Btwqi!", -5));

//A-Z ==> 65-90
//a-z ==> 97-122
//87+5=92-25=67
