const form = document.querySelector("form");

const product = document.querySelector("#product");

const quantity = document.querySelector("#qty");

const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
	e.preventDefault();
	const newLi = document.createElement("li");

	newLi.innerText = `${product.value} ${quantity.value}`;

	list.appendChild(newLi);

	product.value = "";

	quantity.value = "";
});
