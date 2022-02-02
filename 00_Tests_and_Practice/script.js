let capitalize = str => {
	let toArray = [...str];
	let firstToUpperStr = toArray[0].toUpperCase();
	toArray.splice(0, 1, firstToUpperStr);
	let newJoinedWord = toArray.join("");
	return newJoinedWord;
};
