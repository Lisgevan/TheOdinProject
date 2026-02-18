// To complete the exercise, follow the steps below, and make sure that the list behaves as described above.

// 1. To begin, download a copy of our shopping-list.html starting file and make a copy of it somewhere. You'll see that it has some minimal CSS, a form with a label, input, and button, an empty list, and a <script> element. You'll be making all your additions inside the script.
// 2. Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
// 3. Create a function that will run in response to the button being clicked.
// 4. Inside the function body, start by calling preventDefault(). Since the input is wrapped in a form element, pressing the Enter key will trigger the form to submit. The call to preventDefault() will prevent the form from refreshing the page so a new item can be added to the list instead.
// 5. Continue by storing the current value of the input in a variable.
// 6. Next, clear the input element by setting its value to an empty string ("").
// 7. Create three new elements — a list item (<li>), a <span>, and a <button> — and store them in variables.
// 8. Append the span and button as children of the list item.
// 9. Set the text content of the span to the input value you saved earlier, and set the text content of the button to Delete.
// 10. Append the list item to the list.
// 11. Attach an event handler to the Delete button so that, when clicked, it removes the entire list item (<li>...</li>).
// 12. -bottom-Finally, use the focus() method to focus the input element, so it's ready for entering the next shopping list item.

const ul = document.querySelector("ul");
const input = document.querySelector("input");
const addButton = document.querySelector("button");

addButton.addEventListener("click", buttonClickHandler);

function buttonClickHandler(e) {
	e.preventDefault();

	const todoItem = input.value;
	input.value = "";

	if (todoItem) {
		const li = document.createElement("li");
		const span = document.createElement("span");
		const deleteButton = document.createElement("button");
		li.appendChild(span);
		li.appendChild(deleteButton);
		span.innerText = todoItem;
		deleteButton.innerText = "DELETE";
		ul.appendChild(li);

		deleteButton.addEventListener("click", () => deleteHandler(event));
	}
	input.focus();
}

function deleteHandler(event) {
	event.preventDefault();

	event.target.parentElement.remove();
	input.focus();
}

input.focus();
