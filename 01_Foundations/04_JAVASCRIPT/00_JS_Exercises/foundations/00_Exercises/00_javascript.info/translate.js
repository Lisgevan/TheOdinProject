function camelize(str) {
	const arrayFromString = str.split("-");

	for (let i = 1; i < arrayFromString.length; i++) {
		arrayFromString[i] = arrayFromString[i][0].toUpperCase() + arrayFromString[i].slice(1);
	}
	return arrayFromString.join("");
}

console.log(
	camelize("background-color") == "backgroundColor",
	camelize("list-style-image") == "listStyleImage",
	camelize("-webkit-transition") == "WebkitTransition",
);
