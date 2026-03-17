const myLibrary = [];

function Book(title, author, pages, read) {
	if (!new.target) {
		throw Error("You must use the 'new' operator to call the constructor");
	}

	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.id = crypto.randomUUID();

	this.info = () => {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${read ? "read" : "not read yet"}`;
	};
}

function addBookToLibrary(title, author, pages, read) {
	// take params, create a book then store it in the array
	myLibrary.push(new Book(title, author, pages, read));
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", 295, false);
addBookToLibrary("The Hobbit 2", "J.R.R. Tolkien", 295, false);
console.log(myLibrary);
