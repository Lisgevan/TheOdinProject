const button = document.querySelector("button");
const myForm = document.querySelector("form");

myForm.checkValidity() ? (button.style.background = "lightgreen") : (button.style.background = "red");

myForm.addEventListener("input", e => {
	myForm.checkValidity() ? (button.style.background = "lightgreen") : (button.style.background = "red");
});
