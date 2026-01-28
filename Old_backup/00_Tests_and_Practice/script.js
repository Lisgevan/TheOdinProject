const btn = document.querySelector("#btn");
const heading = document.querySelector("#heading");
let r, g, b;

function makeRandomColor() {
	r = Math.floor(Math.random() * 255);
	g = Math.floor(Math.random() * 255);
	b = Math.floor(Math.random() * 255);
	return `rgb(${r},${g},${b})`;
}

btn.addEventListener("click", function () {
	const newColor = makeRandomColor();
	document.body.style.backgroundColor = newColor;
	heading.innerText = newColor;
	if (r + g + b <= 300) {
		heading.style.color = "white";
	}
	console.log(newColor);
});
