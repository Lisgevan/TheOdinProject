console.log("-------- 1 --------");
const add7 = mun => mun + 7;
console.log("****** tests ******");
console.log(add7(3));
console.log(add7(13));
console.log(add7(23));
console.log(add7(33));
console.log(add7(43));

console.log("-------- 2 --------");
const multiply = (num1, num2) => num1 * num2;
console.log("****** tests ******");
console.log(multiply(3, 5));
console.log(multiply(13, 5));
console.log(multiply(23, 5));
console.log(multiply(33, 5));
console.log(multiply(43, 5));

console.log("-------- 3 --------");
const capitalize = string => {
	const letters = string.trim().toLowerCase().split("");
	letters[0] = letters[0].toUpperCase();
	return letters.join("");
};
console.log("****** tests ******");
console.log(capitalize("Hello WoRld"));
console.log(capitalize("qwerty"));
console.log(capitalize("QWERTY"));
console.log(capitalize("HjbJjhJB"));
console.log(capitalize("a            B"));

console.log("-------- 4 --------");
const lastLetter = string => string[string.length - 1];
console.log("****** tests ******");
console.log(lastLetter("Hello WoRld"));
console.log(lastLetter("qwerty"));
console.log(lastLetter("QWERTY"));
console.log(lastLetter("HjbJjhJB"));
console.log(lastLetter("a            B"));
