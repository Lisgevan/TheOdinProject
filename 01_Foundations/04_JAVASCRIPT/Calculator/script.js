//element selectors//
const numpad = document.querySelectorAll("#numpad");
const operator = document.querySelectorAll("#operator");
const clear = document.querySelector("#clear");
const equals = document.querySelector("#equals");
const decimal = document.querySelector("#decimal");
const onOff = document.querySelector("#onOff");
const topDisplay = document.querySelector("#topDisplay");
const bottomDisplay = document.querySelector("#bottomDisplay");
//-----------------//

//variables//
let power = false;
let decimalCheck = true;
let solutionCheck = false;
//-----------------//

//event handling functions//
const onOffClick = e => {
	power = !power;
	if (!power) {
		topDisplay.classList.replace("text-warning", "text-dark");
		bottomDisplay.classList.replace("text-primary", "text-dark");
		onOff.classList.replace("btn-outline-info", "btn-outline-danger");
		// onOff.innerText = "OFF";
	} else {
		topDisplay.classList.replace("text-dark", "text-warning");
		topDisplay.innerText = "0";
		bottomDisplay.classList.replace("text-dark", "text-primary");
		bottomDisplay.innerText = "0";
		onOff.classList.replace("btn-outline-danger", "btn-outline-info");
		decimalCheck = true;
		solutionCheck = false;
		// onOff.innerText = "ON";
	}
	console.log("onoff: ", power);
};

const clearClick = e => {
	if (!power) {
		topDisplay.classList.add("text-dark");
	} else {
		topDisplay.classList.add("text-warning");
		decimalCheck = true;
		solutionCheck = false;
		topDisplay.innerText = "0";
		bottomDisplay.innerText = "0";
	}
	console.log("clear");
};

const operatorClick = e => {
	console.log(bottomDisplay.innerText);
	console.log(topDisplay.innerText);

	topDisplay.innerText === "0"
		? (topDisplay.innerText = bottomDisplay.innerText + e.target.value)
		: topDisplay.innerText.endsWith("/") ||
			  topDisplay.innerText.endsWith("+") ||
			  topDisplay.innerText.endsWith("*") ||
			  topDisplay.innerText.endsWith("-")
			? (topDisplay.innerText = topDisplay.innerText.slice(0, -1) + e.target.value)
			: (topDisplay.innerText += e.target.value);
	bottomDisplay.innerText = "0 ";
	decimalCheck = true;
	console.log("operators");
};

const numberClick = e => {
	if (bottomDisplay.innerText.length > 32 || topDisplay.innerText.length > 32) {
		bottomDisplay.innerText = "ERROR - MAX LENGTH REACHED";
		topDisplay.innerText = "ERROR - MAX LENGTH REACHED";
	} else {
		if (bottomDisplay.innerText === "0") {
			bottomDisplay.innerText = e.target.value;
		} else {
			bottomDisplay.innerText += e.target.value;
		}
		topDisplay.innerText === "0" || solutionCheck
			? (topDisplay.innerText = bottomDisplay.innerText)
			: (topDisplay.innerText += e.target.value);
	}
	solutionCheck = false;
	console.log("numbers", e.target.value);
};

const equalClick = e => {
	topDisplay.innerText.endsWith("/") ||
	topDisplay.innerText.endsWith("+") ||
	topDisplay.innerText.endsWith("-") ||
	topDisplay.innerText.endsWith(".") ||
	topDisplay.innerText.endsWith("*")
		? (topDisplay.innerText = String(eval(topDisplay.innerText.slice(0, -1))))
		: (topDisplay.innerText = String(eval(topDisplay.innerText)));
	solutionCheck = true;
	bottomDisplay.innerText = 0;
	console.log("equal");
};

const decimalClick = e => {
	bottomDisplay.innerText =
		bottomDisplay.innerText === "0"
			? "0" + e.target.value
			: bottomDisplay.innerText.indexOf(".") === -1
				? bottomDisplay.innerText + e.target.value
				: bottomDisplay.innerText;
	if (decimalCheck === true) {
		topDisplay.innerText =
			topDisplay.innerText === "0"
				? bottomDisplay.innerText
				: topDisplay.innerText.endsWith("/") ||
					  topDisplay.innerText.endsWith("+") ||
					  topDisplay.innerText.endsWith("-") ||
					  topDisplay.innerText.endsWith("*")
					? topDisplay.innerText + "0" + e.target.value
					: topDisplay.innerText.endsWith(".")
						? topDisplay.innerText
						: topDisplay.innerText + e.target.value;
		decimalCheck = false;
	}

	console.log("decimal");
};

//-----------------//

//event listeners//
numpad.forEach(numKey => numKey.addEventListener("click", numberClick));
operator.forEach(operator => operator.addEventListener("click", operatorClick));
clear.addEventListener("click", clearClick);
equals.addEventListener("click", equalClick);
decimal.addEventListener("click", decimalClick);
onOff.addEventListener("click", onOffClick);
//-----------------//

//calculator logics//

//-----------------//
