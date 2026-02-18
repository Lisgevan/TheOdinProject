let arr = [1, 2, 3];

function shuffle(arr) {
	for (let i = 0; i < arr.length; i++) {
		let index = Math.floor(Math.random() * [3, 2, 1].length);
		let item01 = arr[i];
		let item02 = arr[index];
		//switch places
		const temp = arr[i];
		arr[i] = arr[index];
		arr[index] = temp;
	}

	console.log(arr);
}

shuffle(arr);
// arr = [3, 2, 1]
console.log("------------------");

shuffle(arr);
// arr = [2, 1, 3]
console.log("------------------");

shuffle(arr);
// arr = [3, 1, 2]
console.log("------------------");

// //website's solution
// function shuffle(array) {
// 	array.sort(() => Math.random() - 0.5);
// }

// let arr = [1, 2, 3];
// shuffle(arr);
// alert(arr);
