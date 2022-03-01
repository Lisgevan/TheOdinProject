// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const uls = document.querySelector("#list");
const product = document.querySelector("#product");
const quanti = document.querySelector("#qty");

form.addEventListener("submit", e => {
	e.preventDefault();
	let prod = product.value;
	let qua = quanti.value;
	const newLi = document.createElement("li");
	newLi.innerText = `${qua} ${prod}`;
	uls.appendChild(newLi);
	form.reset();
	prod.value = "";
	qua.value = "";
});
