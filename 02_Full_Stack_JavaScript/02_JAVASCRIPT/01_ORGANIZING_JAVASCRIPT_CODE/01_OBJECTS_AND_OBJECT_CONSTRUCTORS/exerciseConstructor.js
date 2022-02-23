function book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = true;
	this.info = function () {
		return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? "read" : "not read yet"}.`;
	};
}

const myBook = new book("Me myself and I", "Just Me", 1, true);
console.log(myBook);
console.log(myBook.info());
