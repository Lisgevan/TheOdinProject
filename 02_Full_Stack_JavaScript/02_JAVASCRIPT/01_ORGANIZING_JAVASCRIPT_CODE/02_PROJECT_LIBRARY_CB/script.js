// element selectors
const newBookButton = document.querySelector(".js-newBookButton");
const saveNewBookButton = document.querySelector(".js-saveNewBookButton");
const modalForm = document.querySelector(".js-modalForm");
const cardContainer = document.querySelector(".js-cardContainer");

let myLibrary = [];

// Save myLibrary to localStorage
// localStorage.bookList = JSON.stringify(myLibrary);
// obj = JSON.parse(localStorage.object);
// console.log(JSON.parse(localStorage.bookList));

//// Random hex color
//// const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
// Random hex light color
function getRandomColor() {
	const letters = "BCDEF".split("");
	let color = "";
	for (let i = 0; i < 6; i++) color += letters[Math.floor(Math.random() * letters.length)];
	return color;
}

class Book {
	constructor(id, title, image, author, pages, description, readStatus) {
		this.id = id;
		this.title = title;
		this.image = image;
		this.author = author;
		this.pages = pages;
		this.description = description;
		this.readStatus = readStatus = false;
	}
}

class HandleBooks {
	constructor(book) {
		this.book = book;
	}

	handleReadStatus() {
		const index = myLibrary.findIndex(obj => obj.id == this.book.id);
		myLibrary[index].readStatus = !this.book.readStatus;
		localStorage.bookList = JSON.stringify(myLibrary);
		this.renderCard();
		loadSavedBooks();
	}

	renderCard() {
		return `
			<div class="col">
                <div class="card h-100">
                    <img src="https://dummyimage.com/500x500/${getRandomColor()}/000000&text=${this.book.title}"
                         class="card-img-top" alt="...">
                    <div class="card-body">
                        <figure class="text-start">
                            <blockquote class="blockquote">
                                <p class="js-cardTitle">${this.book.title}</p>
                            </blockquote>
                            <figcaption class="blockquote-footer">
                                By <cite title="Source Title" class="js-authorName">${this.book.author}</cite>
                                <p>(<span class="js-bookPages">${this.book.pages}</span> pages)</p>
                            </figcaption>
                        </figure>
                        <p class="card-text">${this.book.description}</p>
                    </div>
                    <div class="card-footer">
						${
							!this.book.readStatus
								? `<p class="text-muted text-center js-readStatusMsg">I haven't read the book</p>`
								: `<p class="text-muted text-center js-unreadStatusMsg">I read the book</p>`
						}
                        <div class="btn-group d-flex flex-column align-content-stretch" role="group"
                             aria-label="Basic mixed styles example">
                            <div class="d-flex flex-column align-content-stretch">
							<button type="button" ${
								this.book.readStatus
									? `class="btn btn-danger js-toggleReadStatus${this.book.id}"`
									: `class="btn btn-success js-toggleReadStatus${this.book.id}"`
							}>
								${this.book.readStatus ? `Unread` : `Read`}
							</button>
							
                                
                                
                            </div>
                            <button type="button" class="btn btn-warning js-deleteButton${this.book.id}">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
			`;
	}

	deleteBook() {
		const index = myLibrary.findIndex(obj => obj.id == this.book.id);
		myLibrary.splice(index, 1);
		localStorage.bookList = JSON.stringify(myLibrary);
		this.renderCard();
		loadSavedBooks();
	}

	addEventListeners(id) {
		const toggleClass = ".js-toggleReadStatus" + id;
		const deleteClass = ".js-deleteButton" + id;
		document.querySelector(toggleClass).addEventListener("click", this.handleReadStatus.bind(this));
		document.querySelector(deleteClass).addEventListener("click", this.deleteBook.bind(this));
	}
}

let libraryBook;
const createBook = function () {
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
		libraryBook = new HandleBooks(newBook);
		localStorage.bookList = JSON.stringify(myLibrary);
		cardContainer.insertAdjacentHTML("beforeend", libraryBook.renderCard());
		libraryBook.addEventListeners(libraryBook.book.id);
		return libraryBook;
	}
};

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

const loadSavedBooks = () => {
	if (localStorage.bookList) {
		myLibrary = JSON.parse(localStorage.bookList);
		cardContainer.innerHTML = "";
		myLibrary.map(obj => {
			libraryBook = new HandleBooks(obj);
			cardContainer.insertAdjacentHTML("beforeend", libraryBook.renderCard());
			libraryBook.addEventListeners(libraryBook.book.id);
		});
	} else {
		myLibrary.map(obj => {
			libraryBook = new HandleBooks(obj);
			cardContainer.insertAdjacentHTML("beforeend", libraryBook.renderCard());
			libraryBook.addEventListeners(libraryBook.book.id);
		});
	}
};
loadSavedBooks();

const resetModal = () => modalForm.reset();

// Event listeners
newBookButton.addEventListener("click", resetModal);
saveNewBookButton.addEventListener("click", createBook);
//
