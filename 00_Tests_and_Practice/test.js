let strArray = ["ram", "shyam", "shashi", "bhushan", "india"];

const convStrArray = [];
const title = str => {
	let i = 0;
	for (let i = 0; i <= strArray.length; i++) {
		let strn = str.toString();
		// console.log(strn);
		convStrArray.push(strn);
		console.log(
			strn.replace(/\w\S*/g, txt => {
				return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
			})
		);
	}
	i++;
};

// const title = array => {
// 	const newArray = array.reduce((acc, item) => {
// 		let letters = item.split("");
// 		letters[0] = letters[0].toUpperCase();
// 		return acc.concat(letters.join(""));
// 	}, []);
// 	return newArray;
// };

console.log(title(strArray));
// console.log(convStrArray);
