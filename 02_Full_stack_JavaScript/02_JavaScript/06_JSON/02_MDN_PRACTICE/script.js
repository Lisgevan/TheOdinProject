const para1 = document.querySelector(".one");
const para2 = document.querySelector(".two");
let motherInfo = "The mother cats are called ";
let kittenInfo;
const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/tasks/json/sample.json";

fetch(requestURL)
	.then(response => response.text())
	.then(text => displayCatInfo(text));

// Don't edit the code above here!

function displayCatInfo(catString) {
	let total = 0;
	let male = 0;

	// Add your code here
	const catData = JSON.parse(catString);

	for (let i = 0; i < catData.length; i++) {
		const element = catData[i].name;
		if (i < catData.length - 1) {
			motherInfo = `${motherInfo}${element}, `;
		} else {
			motherInfo = `${motherInfo}and ${element}.`;
		}

		// console.log(catData[i].kittens[0].name);
		for (let k = 0; k < catData[i].kittens.length; k++) {
			total++;
			if (catData[i].kittens[k].gender === "m") {
				male++;
			}
		}
	}

	kittenInfo = `There are ${total} kittens in total, ${male} males and ${total - male} females.`;

	// Don't edit the code below here!

	para1.textContent = motherInfo;
	para2.textContent = kittenInfo;
}
