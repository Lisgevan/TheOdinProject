// element selectors
const template = document.querySelector("template");
const templateImg = template.content.querySelector("img");
const templateBookTitle = template.content.querySelector(".js-cardTitle");
const templateAuthorName = template.content.querySelector(".js-authorName");
const templateBookPages = template.content.querySelector(".js-bookPages");
const templateCardText = template.content.querySelector(".card-text");
const templateCard = template.content.querySelector(".col");
const newBookButton = document.querySelector(".js-newBookButton");
const saveNewBookButton = document.querySelector(".js-saveNewBookButton");
const modalForm = document.querySelector(".js-modalForm");
const cardContainer = document.querySelector(".js-cardContainer");
const resetButton = document.querySelector(".js-resetButton");

let myLibrary = [];

// Save myLibrary to localStorage
// localStorage.bookList = JSON.stringify(myLibrary);
// obj = JSON.parse(localStorage.object);
// console.log(JSON.parse(localStorage.bookList));

// check the index of the object
// console.log(
// myLibrary.indexOf(
// 	myLibrary.filter(obj => {
// 		return obj.id === 4;
// 	})[0]
// )
// );

//// Random hex color
//// const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
// Random hex light color
function getRandomColor() {
	const letters = "BCDEF".split("");
	let color = "";
	for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * letters.length)];
	return color;
}

function Book(id, title, image, author, pages, description, readStatus) {
	this.id = id;
	this.title = title;
	this.image = image;
	this.author = author;
	this.pages = pages;
	this.description = description;
	this.readStatus = readStatus = true;
}

const addBookToLibrary = () => {
	if (modalForm.checkValidity()) {
		const bookId = localStorage.bookList
			? localStorage.bookList.length + 1
			: myLibrary.length > 0
			? myLibrary.length + 1
			: 1;
		let bookName = document.querySelector("#bookName+input").value;
		let image = `https://dummyimage.com/500x500/${getRandomColor()}/000000&text=${bookName}`;
		let authorName = document.querySelector("#authorName+input").value;
		let pagesNum = document.querySelector("#pagesNum+input").value;
		let formDescription = document.querySelector(".js-formTextarea").value;

		const newBook = new Book(bookId, bookName, image, authorName, pagesNum, formDescription);
		myLibrary.push(newBook);
		localStorage.bookList = JSON.stringify(myLibrary);
		loadSavedBooks();
		addListeners();
		resetModal();
	}
};

const cardFooterRender = obj => {
	if (obj.readStatus) {
		document.querySelector(".js-readButton").hidden = false;
		document.querySelector(".js-unreadButton").hidden = true;
		document.querySelector(".js-readStatusMsg").hidden = false;
		document.querySelector(".js-unreadStatusMsg").hidden = true;
	} else {
		document.querySelector(".js-readButton").hidden = true;
		document.querySelector(".js-unreadButton").hidden = false;
		document.querySelector(".js-readStatusMsg").hidden = true;
		document.querySelector(".js-unreadStatusMsg").hidden = false;
	}
};

const loadSavedBooks = () => {
	if (localStorage.bookList) {
		myLibrary = JSON.parse(localStorage.bookList);
		cardContainer.innerHTML = "";
		myLibrary.map(obj => {
			templateCard.dataset.id = obj.id;
			templateBookTitle.innerText = obj.title;
			templateAuthorName.innerText = obj.author;
			templateCardText.innerText = obj.description;
			templateBookPages.innerText = obj.pages;
			templateImg.src = `https://dummyimage.com/500x500/${getRandomColor()}/000000&text=${obj.title}`;
			cardContainer.innerHTML += template.innerHTML;
			cardFooterRender(obj);
		});
	} else {
		myLibrary.map(obj => {
			templateCard.dataset.id = obj.id;
			templateBookTitle.innerText = obj.title;
			templateAuthorName.innerText = obj.author;
			templateCardText.innerText = obj.description;
			templateBookPages.innerText = obj.pages;
			templateImg.src = `https://dummyimage.com/500x500/${getRandomColor()}/000000&text=${obj.title}`;
			cardContainer.innerHTML += template.innerHTML;
			cardFooterRender(obj);
		});
	}
};
loadSavedBooks();

function deleteBook(e) {
	const index = myLibrary.indexOf(
		myLibrary.filter(obj => {
			return obj.id === +e.path[4].getAttribute("data-id");
		})[0]
	);
	myLibrary.splice(index, 1);
	localStorage.bookList = JSON.stringify(myLibrary);
	loadSavedBooks();
	addListeners();
}

function toggleReadStatus(e) {
	const index = myLibrary.indexOf(
		myLibrary.filter(obj => {
			return obj.id === +e.path[5].getAttribute("data-id");
		})[0]
	);
	if (myLibrary[index].readStatus) {
		myLibrary[index].readStatus = false;
		e.path[3].querySelector(".js-unreadButton").hidden = false;
		e.path[3].querySelector(".js-readButton").hidden = true;
		e.path[3].querySelector(".js-unreadStatusMsg").hidden = false;
		e.path[3].querySelector(".js-readStatusMsg").hidden = true;
	} else {
		myLibrary[index].readStatus = true;
		e.path[3].querySelector(".js-unreadButton").hidden = true;
		e.path[3].querySelector(".js-readButton").hidden = false;
		e.path[3].querySelector(".js-unreadStatusMsg").hidden = true;
		e.path[3].querySelector(".js-readStatusMsg").hidden = false;
	}
	localStorage.bookList = JSON.stringify(myLibrary);
}

const resetModal = () => modalForm.reset();

const addListeners = e => {
	const readButtons = document.querySelectorAll(".js-readButton");
	const unreadButtons = document.querySelectorAll(".js-unreadButton");
	const deleteButtons = document.querySelectorAll(".js-deleteButton");
	readButtons.forEach(readButton => readButton.addEventListener("click", toggleReadStatus));
	unreadButtons.forEach(readButton => readButton.addEventListener("click", toggleReadStatus));
	deleteButtons.forEach(readButton => readButton.addEventListener("click", deleteBook));
};
addListeners();

// Event listeners
newBookButton.addEventListener("click", resetModal);
saveNewBookButton.addEventListener("click", addBookToLibrary);
//
