const form = document.querySelector("form");

form.addEventListener("submit", e => {
	e.preventDefault();
	const quantity = document.querySelector("#qty");
	const product = document.querySelector("#product");

	const unorderedList = document.querySelector("list");

	const listItem = unorderedList.createElement("li");

	listItem.innerText(`${quantity} ${product}`);

	unorderedList.appendChild("listItem");

	input.value = "";
});
