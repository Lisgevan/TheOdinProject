//element selectors
const containerBox = document.querySelector("#containerBox");
const spans = document.querySelectorAll("span");
const boxNum = document.querySelector("#boxNum");
const colorSelectors = document.querySelector("#colorSelectors");

const multiColor = document.querySelector("#multiColor");
const colorPick = document.querySelector("#colorPick");
const resetBtn = document.querySelector("#resetBtn");
const deleteColor = document.querySelector("#deleteColor");
const opacityColor = document.querySelector("#opacityColor");

//variables
let colorPicked = "rgb(0, 0, 0)";
let opacity = false;

//Random color generator
const randomRGB = () => {
	const randomR = Math.floor(Math.random() * 256);
	const randomG = Math.floor(Math.random() * 256);
	const randomB = Math.floor(Math.random() * 256);
	const randomColor = `rgba(${randomR},${randomG},${randomB})`;
	return randomColor;
};

//button event listeners
multiColor.addEventListener("click", e => {
	opacity = false;
	colorPicked = "multiColor";
});
colorPick.addEventListener("change", e => {
	opacity = false;
	colorPicked = e.target.value;
});
deleteColor.addEventListener("click", e => {
	opacity = false;
	colorPicked = "";
});
resetBtn.addEventListener("click", e => {
	opacity = false;
	colorPicked = "rgb(0, 0, 0)";
	gridCreate();
});
opacityColor.addEventListener("click", e => {
	opacity = true;
	colorPicked === "rgb(0, 0, 0)" || colorPicked === "multiColor" || colorPicked === ""
		? (colorPicked = "rgba(0, 0, 0, 0.1)")
		: (colorPicked =
				"rgba(" +
				parseInt(colorPicked.slice(-6, -4), 16) +
				"," +
				parseInt(colorPicked.slice(-4, -2), 16) +
				"," +
				parseInt(colorPicked.slice(-2), 16) +
				"," +
				0.1 +
				")");
});

//grid creator function
const gridCreate = () => {
	containerBox.innerHTML = "";
	for (let i = 0; i < +boxNum.value; i++) {
		const divBoxRow = document.createElement("div");
		divBoxRow.style.height = `${containerBox.offsetHeight / +boxNum.value}px`;
		divBoxRow.setAttribute("class", "row");

		for (let i = 0; i < +boxNum.value; i++) {
			const divBoxCell = document.createElement("div");
			divBoxCell.setAttribute("class", "cell");
			divBoxCell.style.width = `${containerBox.offsetWidth / +boxNum.value}px`;
			divBoxCell.addEventListener("mouseover", e => {
				if (!opacity) {
					e.target.style.backgroundColor = colorSet();
				} else {
					e.target.style.backgroundColor
						? (e.target.style.backgroundColor = setOpacity(e.target.style.backgroundColor))
						: (e.target.style.backgroundColor = setOpacity(colorPicked));
				}
			});
			divBoxRow.appendChild(divBoxCell);
		}

		containerBox.appendChild(divBoxRow);
	}
	for (let span of spans) {
		span.innerText = +boxNum.value;
	}
};

//opacity set function
const setOpacity = colorPicked => {
	let opacity = +colorPicked.match(/[^,]+(?=\))/);
	opacity += 0.1;
	colorPicked = colorPicked.replace(/[^,]+(?=\))/, `${opacity}`);
	return colorPicked;
};

//color set function
const colorSet = () => {
	return colorPicked === "multiColor" ? randomRGB() : colorPicked;
};

//update grid box on window or input change
window.addEventListener("resize", gridCreate);
boxNum.addEventListener("input", gridCreate);

gridCreate();

//range input script
const slider = document.getElementById("boxNum");
const min = slider.min;
const max = slider.max;
const value = slider.value;

slider.style.background = `linear-gradient(to right, #13bb2f 0%, #13bb2f ${
	((value - min) / (max - min)) * 100
}%, #b92c2c ${((value - min) / (max - min)) * 100}%, #b92c2c 100%)`;

slider.oninput = function () {
	this.style.background = `linear-gradient(to right, #13bb2f 0%, #13bb2f ${
		((this.value - this.min) / (this.max - this.min)) * 100
	}%, #b92c2c ${((this.value - this.min) / (this.max - this.min)) * 100}%, #b92c2c 100%)`;
};
